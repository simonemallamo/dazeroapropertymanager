// ====== DA COMPILARE: un solo posto per link e prezzi ======
window.CFG = {
  guideLink: "https://buy.stripe.com/INCOLLA_LINK_GUIDA",      // Stripe Payment Link della guida
  fastStartLink: "https://buy.stripe.com/INCOLLA_LINK_FASTSTART", // Stripe Payment Link di Fast Start
  price: "2,90",            // prezzo guida (solo testo mostrato)
  fsPrice: "29,90",         // prezzo Fast Start (solo testo mostrato)
  youtubeId: "INCOLLA_ID_VIDEO",   // video di presentazione (YouTube non in elenco)
  fullProgramUrl: "mailto:email@tuodominio.com",  // contatto per il percorso completo
  support: "email@tuodominio.com"
};
document.addEventListener("DOMContentLoaded", () => {
  const C = window.CFG, q = s => document.querySelectorAll(s);
  q("[data-buy]").forEach(a => a.href = C.guideLink);
  q("[data-fs]").forEach(a => a.href = C.fastStartLink);
  q("[data-full]").forEach(a => a.href = C.fullProgramUrl);
  q("[data-price]").forEach(e => e.textContent = C.price);
  q("[data-fsprice]").forEach(e => e.textContent = C.fsPrice);
  q("[data-support]").forEach(e => { e.textContent = C.support; e.href = "mailto:" + C.support; });
});
