// Riceve gli avvisi di pagamento da Stripe e dà accesso all'acquirente su Firestore.
const Stripe = require("stripe");
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)) });
}
const db = admin.firestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Metodo non consentito" };
  const raw = event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body;
  let ev;
  try {
    ev = stripe.webhooks.constructEvent(raw, event.headers["stripe-signature"], process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    return { statusCode: 400, body: "Firma non valida" };
  }
  if (!["checkout.session.completed", "checkout.session.async_payment_succeeded"].includes(ev.type))
    return { statusCode: 200, body: "ignorato" };

  const s = ev.data.object;
  if (!["paid", "no_payment_required"].includes(s.payment_status)) return { statusCode: 200, body: "in attesa" };
  const email = (s.customer_details?.email || s.customer_email || "").toLowerCase().trim();
  if (!email) return { statusCode: 200, body: "nessuna email" };

  // Se il nome del prodotto contiene "Fast Start" -> accesso alle lezioni, altrimenti -> guida
  const items = await stripe.checkout.sessions.listLineItems(s.id, { expand: ["data.price.product"] });
  const kw = (process.env.FASTSTART_KEYWORD || "fast start").toLowerCase();
  const isFS = items.data.some((i) => ((i.price && i.price.product && i.price.product.name) || i.description || "").toLowerCase().includes(kw));

  await db.collection("entitlements").doc(email).set(
    { ...(isFS ? { fastStart: true } : { guide: true }), updatedAt: admin.firestore.FieldValue.serverTimestamp(), lastSession: s.id },
    { merge: true }
  );
  return { statusCode: 200, body: "ok" };
};
