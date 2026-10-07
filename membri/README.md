# Area membri Fast Start — messa online

## 1. Firebase (progetto NUOVO, separato dal Prospect Manager)
1. console.firebase.google.com → Aggiungi progetto (es. "fast-start-area").
2. Build → Authentication → Inizia → abilita **Email/Password**.
3. Authentication → Impostazioni → Domini autorizzati → aggiungi `tuoutente.github.io` (e il tuo dominio, se ne usi uno).
4. Build → Firestore Database → Crea database (modalità produzione).
5. Firestore → Regole → incolla il contenuto di `firestore.rules` → Pubblica.
6. Impostazioni progetto → Le tue app → Web (</>) → copia la configurazione in `index.html` (blocco `firebaseConfig`).
7. Compila anche `BUY_URL` (pagina di acquisto) e `SUPPORT` (email assistenza).

In questa fase bastano Authentication e Firestore con il piano gratuito (Spark).

## 2. Video (Firestore → collezione `videos`)
Crea un documento per lezione. ID del documento = chiave:
`intro`, `vantaggi`, `ota`, `zona`, `immobile`, `annuncio`, `regola10`, `bonus`

YouTube (non in elenco):  provider = "youtube", id = "CODICE_VIDEO"   (stringhe)
Descrizione facoltativa:   description = "testo sotto il video"

**Passare a Bunny dopo:** nello stesso documento imposta
provider = "bunny", library = "ID_LIBRERIA", id = "ID_VIDEO"
e in Bunny limita gli embed al tuo dominio. Il sito non va toccato.

## 3. Dare accesso a un acquirente (per ora a mano)
1. L'acquirente crea il suo accesso dalla pagina («Prima volta qui?»).
2. Authentication → Utenti → copia il suo **UID**.
3. Firestore → collezione `entitlements` → documento con ID = UID → campo `fastStart` = true.
Accesso a vita finché non elimini quel documento. Nella fase 2 lo farà in automatico il webhook di Stripe.

## 4. GitHub Pages
Carica la cartella su un repository → Settings → Pages → branch `main`, cartella `/ (root)`.
(Il file `index.html` e la cartella `assets` devono stare nella radice.)
