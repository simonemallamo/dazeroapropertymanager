// ====== UNICO FILE DA MODIFICARE: link Stripe, codici, prezzi, video, email ======
window.CFG = {
  guideLink: "https://buy.stripe.com/14AeVddJO0Kg9vL7erfIs03",      // Payment Link guida
  guideCode: "GUIDA80",                                              // codice promo guida (applicato in automatico)
  fullPrice: "9,90",        // prezzo pieno guida (barrato)
  price: "2",               // prezzo guida col codice (9,90€ - 7,90€)
  fastStartLink: "https://buy.stripe.com/28EbJ1dJO50wbDT0Q3fIs02",  // Payment Link Fast Start
  fastStartCode: "ZERO60",                                           // codice promo Fast Start (applicato in automatico)
  fsFullPrice: "69",        // prezzo pieno Fast Start (barrato)
  fsPrice: "24,90",         // prezzo Fast Start col codice (69€ - 44,10€)
  fullProgramUrl: "mailto:mallamo.simone@gmail.com", // contatto per il percorso completo
  support: "mallamo.simone@gmail.com"
};
document.addEventListener("DOMContentLoaded", () => {
  const C = window.CFG, q = s => document.querySelectorAll(s);
  const withCode = (link, code) => code ? link + (link.includes("?") ? "&" : "?") + "prefilled_promo_code=" + encodeURIComponent(code) : link;
  q("[data-buy]").forEach(a => a.href = withCode(C.guideLink, C.guideCode));
  q("[data-fs]").forEach(a => a.href = withCode(C.fastStartLink, C.fastStartCode));
  q("[data-full]").forEach(a => a.href = C.fullProgramUrl);
  q("[data-price]").forEach(e => e.textContent = C.price);
  q("[data-full-price]").forEach(e => e.textContent = C.fullPrice);
  q("[data-fs-full]").forEach(e => e.textContent = C.fsFullPrice);
  q("[data-fsprice]").forEach(e => e.textContent = C.fsPrice);
  q("[data-code]").forEach(e => e.textContent = C.guideCode);
  q("[data-fs-code]").forEach(e => e.textContent = C.fastStartCode);
  q("[data-support]").forEach(e => { e.textContent = C.support; e.href = "mailto:" + C.support; });
});
