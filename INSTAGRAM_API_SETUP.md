# 📸 Instagram Graph API - Guida Completa al Setup

Questa guida ti accompagna passo dopo passo nella configurazione della **Instagram Graph API** per ottenere statistiche in tempo reale del tuo account Instagram Business.

## 📋 Requisiti Preliminari

Prima di iniziare, assicurati di avere:

- ✅ **Account Instagram Business o Creator** (NON funziona con account personali)
- ✅ **Pagina Facebook** collegata al tuo account Instagram
- ✅ **Account Facebook Developer** (gratuito)
- ✅ Accesso amministratore alla pagina Facebook
- ⏱️ Tempo necessario: **30-45 minuti**

> **⚠️ IMPORTANTE**: L'account Instagram DEVE essere di tipo Business o Creator e DEVE essere collegato a una Pagina Facebook. Se hai un account personale, dovrai convertirlo prima.

---

## 🔄 Convertire Account Instagram Personale in Business

Se il tuo account Instagram è personale, segui questi passaggi:

1. **Crea una Pagina Facebook** (se non ne hai già una):
   - Vai su [facebook.com/pages/create](https://www.facebook.com/pages/create)
   - Crea una pagina con il nome del tuo brand/progetto
   - Categoria: "Content Creator" o "Wildlife Photographer"

2. **Converti l'account Instagram in Business**:
   - Apri l'app Instagram
   - Vai su **Profilo** → **Menu** (☰) → **Impostazioni e privacy**
   - Seleziona **Tipo di account e strumenti**
   - Tocca **Passa a un account professionale**
   - Scegli **Creator** o **Business**
   - Collega la Pagina Facebook che hai creato

---

## 📝 Passaggio 1: Creare un'App Facebook

### 1.1 Accedi a Facebook Developers

1. Vai su [developers.facebook.com](https://developers.facebook.com)
2. Clicca su **My Apps** (in alto a destra)
3. Se è la prima volta:
   - Clicca su **Get Started**
   - Completa la registrazione come sviluppatore
   - Verifica il tuo account (email o numero di telefono)

### 1.2 Crea una Nuova App

1. Clicca su **Create App**
2. Seleziona il tipo di app:
   - **Use case**: Scegli **"Other"** (Altro)
   - Clicca **Next**
3. Scegli il tipo di app:
   - Seleziona **"Business"**
   - Clicca **Next**
4. Compila i dettagli dell'app:
   ```
   App Display Name: Mountain Fauna Lover Stats
   App Contact Email: [la tua email]
   Business Account: [Opzionale - puoi saltare]
   ```
5. Clicca su **Create App**
6. Completa il Security Check (se richiesto)

### 1.3 Configurare l'App

1. Nella dashboard dell'app, vai su **Settings** → **Basic**
2. Annota i seguenti valori (li useremo dopo):
   - **App ID** (es. `123456789012345`)
   - **App Secret** (clicca su "Show" per visualizzarlo)

---

## 🔐 Passaggio 2: Configurare Instagram Graph API

### 2.1 Aggiungere il Prodotto Instagram

1. Nella dashboard dell'app, vai su **Add Product** (dal menu laterale)
2. Trova **"Instagram Graph API"** e clicca su **Set Up**
3. L'API verrà aggiunta alla tua app

### 2.2 Aggiungere anche Facebook Login (necessario)

1. Cerca **"Facebook Login"** nella sezione Add Product
2. Clicca su **Set Up**
3. Seleziona **Web** come piattaforma
4. In "Site URL" inserisci: `https://mountainfaunalover.com`
5. Clicca su **Save**

---

## 🎟️ Passaggio 3: Ottenere il Long-Lived Access Token

Questo è il passaggio più importante. Abbiamo bisogno di un **Long-Lived User Access Token** che dura 60 giorni e può essere rinnovato automaticamente.

### 3.1 Ottenere il Short-Lived Token (tramite Graph API Explorer)

1. Vai su [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)

2. In alto a destra, seleziona:
   - **Meta App**: La tua app ("Mountain Fauna Lover Stats")
   - **User or Page**: Seleziona il tuo account

3. Clicca su **Permissions** (Generate Access Token)

4. Aggiungi i seguenti permessi:
   - `pages_show_list` (per vedere le tue pagine)
   - `pages_read_engagement` (per leggere le statistiche)
   - `instagram_basic` (per accedere ai dati Instagram base)
   - `instagram_manage_insights` (per le statistiche Instagram - **IMPORTANTE**)

5. Clicca su **Generate Access Token**

6. Apparirà una finestra di login:
   - Effettua il login con Facebook
   - Approva tutti i permessi richiesti

7. Copia il token generato (inizia con `EAAE...`)
   - Questo è il tuo **Short-Lived Token** (dura ~2 ore)

### 3.2 Ottenere l'Instagram Business Account ID

Prima di convertire il token, dobbiamo trovare l'ID dell'account Instagram Business:

1. Rimani su **Graph API Explorer**
2. Nel campo "GET", incolla questo:
   ```
   /me/accounts?fields=instagram_business_account,name
   ```
3. Clicca su **Submit**
4. Vedrai una risposta simile a questa:
   ```json
   {
     "data": [
       {
         "instagram_business_account": {
           "id": "17841400001234567"
         },
         "name": "Mountain & Fauna Lover",
         "id": "123456789012345"
       }
     ]
   }
   ```
5. **Copia il valore di `instagram_business_account.id`** (es. `17841400001234567`)
   - Questo è il tuo **Instagram Business Account ID**

> **⚠️ ATTENZIONE**: Se non vedi `instagram_business_account` nella risposta, significa che:
> - Il tuo account Instagram non è di tipo Business/Creator
> - L'account Instagram non è collegato alla Pagina Facebook
> - Non hai i permessi necessari

### 3.3 Convertire in Long-Lived Token

Ora convertiamo il short-lived token in un long-lived token (60 giorni):

1. Apri un nuovo tab del browser
2. Sostituisci `YOUR_APP_ID`, `YOUR_APP_SECRET`, e `YOUR_SHORT_LIVED_TOKEN` con i tuoi valori:
   ```
   https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_LIVED_TOKEN
   ```

3. Esempio concreto:
   ```
   https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=123456789012345&client_secret=abcdef1234567890abcdef1234567890&fb_exchange_token=EAAExxxxxxxxxxxxxxxxxxxxxx
   ```

4. Incolla l'URL nel browser e premi Invio

5. Riceverai una risposta JSON:
   ```json
   {
     "access_token": "EAAEyyyyyyyyyyyyyyyyyyyyyy...",
     "token_type": "bearer",
     "expires_in": 5183944
   }
   ```

6. **Copia il valore di `access_token`** - Questo è il tuo **Long-Lived Token**!
   - Dura 60 giorni
   - Può essere rinnovato prima della scadenza

---

## 🧪 Passaggio 4: Testare l'API

Prima di integrare nel codice, testiamo che tutto funzioni:

1. Vai su [Graph API Explorer](https://developers.facebook.com/tools/explorer)
2. Incolla il **Long-Lived Token** nel campo "Access Token"
3. Nel campo GET, incolla (sostituisci `INSTAGRAM_BUSINESS_ACCOUNT_ID` con il tuo ID):
   ```
   /INSTAGRAM_BUSINESS_ACCOUNT_ID?fields=followers_count,media_count,username
   ```
4. Clicca su **Submit**
5. Dovresti vedere:
   ```json
   {
     "followers_count": 5832,
     "media_count": 145,
     "username": "mountainfaunalover",
     "id": "17841400001234567"
   }
   ```

✅ **Se vedi i dati, l'API funziona correttamente!**

---

## ⚙️ Passaggio 5: Configurare il Progetto

### 5.1 Creare il File `.env.local`

Nella root del progetto, crea un file chiamato `.env.local`:

```bash
# Instagram Graph API Configuration
VITE_INSTAGRAM_ACCESS_TOKEN=EAAEyyyyyyyyyyyyyyyyyyyyyy...
VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID=17841400001234567

# Facebook App Credentials (opzionali - per token refresh)
VITE_FACEBOOK_APP_ID=123456789012345
VITE_FACEBOOK_APP_SECRET=abcdef1234567890abcdef1234567890
```

### 5.2 Valori da Inserire

| Variabile | Dove Trovarla | Esempio |
|-----------|---------------|---------|
| `VITE_INSTAGRAM_ACCESS_TOKEN` | Long-Lived Token dal Passaggio 3.3 | `EAAExxxxx...` |
| `VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID` | ID dal Passaggio 3.2 | `17841400001234567` |
| `VITE_FACEBOOK_APP_ID` | Dashboard App → Settings → Basic | `123456789012345` |
| `VITE_FACEBOOK_APP_SECRET` | Dashboard App → Settings → Basic (Show) | `abcdef123...` |

### 5.3 Riavviare il Dev Server

```bash
# Ferma il server se è in esecuzione (Ctrl+C)
# Riavvia il server
npm run dev
```

---

## ✅ Passaggio 6: Verificare l'Integrazione

1. Apri il browser su `http://localhost:5173`
2. Vai alla homepage
3. Nella sezione "Statistiche" dovresti vedere:
   - ✅ **Iscritti YouTube**: Numero dinamico da YouTube API
   - ✅ **Video Pubblicati**: Numero dinamico da YouTube API
   - ✅ **Avvistamenti**: Numero manuale
   - ✅ **Follower Instagram**: Numero dinamico da Instagram API ⬅️ **NUOVO!**

### Verifica nella Console del Browser

1. Apri DevTools (F12)
2. Vai sulla tab **Console**
3. Non dovresti vedere errori relativi a Instagram
4. Dovresti vedere log simili a:
   ```
   ✓ Instagram stats fetched successfully
   ```

---

## 🔄 Gestione del Token (Rinnovo Automatico)

I Long-Lived Token durano **60 giorni** e vanno rinnovati prima della scadenza.

### Opzione 1: Rinnovo Manuale (Ogni 60 giorni)

Ripeti il Passaggio 3.3 ogni 60 giorni per ottenere un nuovo token.

### Opzione 2: Rinnovo Automatico (Consigliato per produzione)

Per un'app in produzione, dovresti implementare un sistema server-side che:

1. Controlla la data di scadenza del token
2. 7 giorni prima della scadenza, chiama l'API per rinnovare:
   ```
   GET /oauth/access_token?grant_type=fb_exchange_token&access_token=CURRENT_TOKEN
   ```
3. Salva il nuovo token in modo sicuro

> **💡 Suggerimento**: Per ora, imposta un promemoria nel calendario per rinnovare il token ogni 50 giorni.

---

## 🚨 Troubleshooting

### Errore: "Invalid OAuth access token"

**Causa**: Il token è scaduto o non valido

**Soluzione**:
1. Genera un nuovo Long-Lived Token seguendo il Passaggio 3
2. Aggiorna `.env.local` con il nuovo token
3. Riavvia il dev server

### Errore: "Insufficient permissions"

**Causa**: Mancano i permessi necessari

**Soluzione**:
1. Torna su Graph API Explorer
2. Aggiungi i permessi mancanti:
   - `instagram_basic`
   - `instagram_manage_insights`
   - `pages_read_engagement`
3. Genera un nuovo token
4. Converti in Long-Lived Token

### Errore: "Account Instagram Business non trovato"

**Causa**: L'ID è sbagliato o l'account non è Business

**Soluzione**:
1. Verifica che l'account Instagram sia di tipo Business/Creator
2. Verifica che sia collegato alla Pagina Facebook
3. Ri-ottieni l'ID seguendo il Passaggio 3.2

### Errore: "instagram_business_account is null"

**Causa**: La Pagina Facebook non è collegata all'account Instagram

**Soluzione**:
1. Vai su Instagram → Impostazioni → Account
2. Tocca "Passa a un account professionale"
3. Collega la Pagina Facebook corretta
4. Ri-ottieni l'ID

### Statistica mostra "API non configurata"

**Causa**: Le variabili d'ambiente non sono impostate correttamente

**Soluzione**:
1. Verifica che `.env.local` esista nella root del progetto
2. Verifica che le variabili inizino con `VITE_`
3. Riavvia il dev server (`npm run dev`)
4. Apri DevTools → Console per vedere errori specifici

### Il numero dei follower non si aggiorna

**Causa**: La cache di React Query (30 minuti)

**Soluzione**:
- I dati vengono aggiornati automaticamente ogni 30 minuti
- Per forzare un refresh immediato: ricarica la pagina con Ctrl+Shift+R
- La cache è progettata per ridurre le chiamate API

---

## 🌐 Deployment (Vercel/Netlify)

Quando fai il deploy in produzione:

### Vercel

1. Vai su **Settings** → **Environment Variables**
2. Aggiungi le variabili:
   ```
   VITE_INSTAGRAM_ACCESS_TOKEN = EAAExxxxx...
   VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID = 17841400001234567
   ```
3. Rideploy l'app

### Netlify

1. Vai su **Site settings** → **Build & deploy** → **Environment**
2. Aggiungi le variabili (stessi valori di sopra)
3. Rideploy l'app

---

## 🔒 Sicurezza e Best Practices

### ✅ Cosa Fare

- ✅ Usa sempre Long-Lived Token (60 giorni)
- ✅ Rinnova il token PRIMA della scadenza
- ✅ Usa variabili d'ambiente (mai hardcodare nel codice)
- ✅ Aggiungi `.env.local` al `.gitignore`
- ✅ Limita i permessi dell'app solo a quelli necessari
- ✅ Monitora l'uso dell'API tramite Facebook Developer Dashboard

### ❌ Cosa NON Fare

- ❌ NON condividere mai il token o l'App Secret
- ❌ NON committare `.env.local` su Git
- ❌ NON usare lo stesso token per più progetti
- ❌ NON disabilitare la cache di React Query (spreco di quota API)
- ❌ NON esporre il token nel codice client pubblico

---

## 📊 Limiti dell'API

### Rate Limits

Instagram Graph API ha limiti di richieste:

- **200 chiamate all'ora** per app
- **Con la nostra cache (30 min)**: ~50 chiamate al giorno
- **Senza cache**: fino a 4,800 chiamate al giorno (sconsigliato)

### Dati Disponibili

Con l'implementazione attuale puoi ottenere:

- ✅ Numero di follower (`followers_count`)
- ✅ Numero di post/media (`media_count`)
- ✅ Username (`username`)
- ❌ Engagement rate (richiede analisi complesse)
- ❌ Likes/commenti per post (richiede permessi aggiuntivi)

---

## 🎯 Prossimi Passi

Dopo aver completato il setup:

1. ✅ Testa l'integrazione localmente
2. ✅ Fai il deploy in produzione
3. 📅 Imposta un promemoria per il rinnovo del token (ogni 50 giorni)
4. 📊 Monitora l'uso dell'API su Facebook Developer Dashboard
5. 🔔 (Opzionale) Implementa un sistema di notifica per scadenza token

---

## 📚 Risorse Utili

- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-api)
- [Access Token Guide](https://developers.facebook.com/docs/facebook-login/guides/access-tokens)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer)
- [App Dashboard](https://developers.facebook.com/apps)

---

## ❓ Domande Frequenti

### Devo pagare per usare l'API?

No, l'Instagram Graph API è **completamente gratuita** per uso standard.

### Il token scade?

Sì, il Long-Lived Token dura **60 giorni**. Deve essere rinnovato prima della scadenza.

### Posso usare un account Instagram personale?

No, DEVI avere un account **Business o Creator** collegato a una Pagina Facebook.

### Quante richieste posso fare?

200 all'ora. La nostra implementazione con cache fa ~50 richieste al giorno, ben sotto il limite.

### Cosa succede se il token scade?

Le statistiche Instagram mostreranno "API non configurata". Dovrai generare un nuovo token.

---

## 🆘 Supporto

Se incontri problemi:

1. Controlla la sezione **Troubleshooting** sopra
2. Verifica la console del browser per errori specifici
3. Controlla che tutti i passaggi siano stati seguiti correttamente
4. Verifica lo stato dell'API su [Facebook Status](https://developers.facebook.com/status)

---

**Creato per Mountain & Fauna Lover** 🏔️🦌
