# Sito Simone Mallamo — struttura

Carica TUTTA questa cartella nella radice di un repository GitHub
(Settings → Pages → branch main, cartella root).

- `index.html`        landing della guida (2-3€)
- `grazie.html`       pagina dopo il pagamento: PDF + video + offerta Fast Start (29,90€)
- `membri/`           area membri Fast Start (vedi `membri/README.md` per Firebase)
- `assets/config.js`  UNICO file da compilare: link Stripe, prezzi, video, email

## Stripe (Payment Link, senza codice)
1. Stripe → Prodotti: crea "Guida affitti brevi" e "Fast Start" (pagamento unico).
2. Per ciascuno crea un Payment Link e imposta "Dopo il pagamento → Reindirizza a":
   - Guida:      https://TUO-SITO/grazie.html
   - Fast Start: https://TUO-SITO/membri/
3. Incolla i due link in `assets/config.js` (guideLink, fastStartLink).
4. Prova tutto in modalità test (carta 4242 4242 4242 4242) prima di andare live.

## Ancora da fare
- Accesso automatico a Fast Start dopo il pagamento (webhook Stripe → Firebase)
- Verifica email all'iscrizione nell'area membri
- Pagine `privacy.html` e `termini.html` (già linkate nel footer)
