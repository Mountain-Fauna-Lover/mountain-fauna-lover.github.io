# 🚀 Deployment Guide - GitHub Pages

Questa guida ti mostra come configurare e deployare il sito su GitHub Pages.

## 📋 Prerequisiti

- Repository GitHub: `https://github.com/Mountain-Fauna-Lover/mountain-fauna-lover.github.io`
- Account GitHub con permessi di scrittura sul repository
- API Keys configurate (YouTube, Instagram)

---

## 🔧 Setup GitHub Secrets

Per far funzionare le API in produzione, devi configurare i **GitHub Secrets**:

### 1. Vai su GitHub Repository Settings

1. Apri il repository: https://github.com/Mountain-Fauna-Lover/mountain-fauna-lover.github.io
2. Vai su **Settings** (tab in alto)
3. Nel menu laterale: **Secrets and variables** → **Actions**
4. Clicca **New repository secret**

### 2. Aggiungi i Seguenti Secrets

Crea questi secrets uno per uno:

| Secret Name | Valore | Obbligatorio |
|-------------|--------|--------------|
| `VITE_YOUTUBE_API_KEY` | `AIzaSyB0g8EhCtR4HI8ocjuQqv7N8EBanwbDTKg` | ✅ Sì |
| `VITE_YOUTUBE_CHANNEL_ID` | `UCRJjOhCK-bv6DzMCMaGPbiw` | ✅ Sì |
| `VITE_INSTAGRAM_ACCESS_TOKEN` | [Quando disponibile] | ⚠️ Opzionale |
| `VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID` | [Quando disponibile] | ⚠️ Opzionale |
| `VITE_FACEBOOK_APP_ID` | `1923131111575808` | ⚠️ Opzionale |
| `VITE_FACEBOOK_APP_SECRET` | `6b32fb460577671c7a4d63d7c7175fbb` | ⚠️ Opzionale |

**Come aggiungere un secret:**
1. Clicca **New repository secret**
2. Name: `VITE_YOUTUBE_API_KEY`
3. Value: `AIzaSyB0g8EhCtR4HI8ocjuQqv7N8EBanwbDTKg`
4. Clicca **Add secret**
5. Ripeti per tutti gli altri secrets

---

## 🌐 Configurare GitHub Pages

### 1. Abilita GitHub Pages

1. Vai su **Settings** → **Pages** (menu laterale)
2. In **Source**, seleziona:
   - Source: **GitHub Actions** (invece di "Deploy from a branch")
3. Salva

### 2. Verifica Workflow Permissions

1. Vai su **Settings** → **Actions** → **General**
2. Scorri fino a **Workflow permissions**
3. Seleziona:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Clicca **Save**

---

## 🚀 Deploy Automatico

Una volta configurato, il deploy è **completamente automatico**:

### Come Funziona

```
1. Fai push su branch main
   ↓
2. GitHub Actions si attiva automaticamente
   ↓
3. Installa dipendenze (npm ci)
   ↓
4. Build del progetto con Vite
   ↓
5. Deploy su GitHub Pages
   ↓
6. Sito online in ~2-3 minuti! ✅
```

### Trigger del Deploy

Il deploy si attiva automaticamente quando:
- ✅ Fai `git push origin main`
- ✅ Merge di una Pull Request su `main`
- ✅ Trigger manuale da Actions tab

---

## 📝 Comandi di Deploy

### Opzione 1: Deploy Automatico (Raccomandato)

```bash
# Commit e push normali
git add .
git commit -m "feat: Update features"
git push origin main

# GitHub Actions fa tutto automaticamente
```

### Opzione 2: Deploy Manuale

Se serve fare un deploy manuale:

```bash
# Build locale
npm run build

# Deploy con gh-pages (opzionale, usa GitHub Actions invece)
npm run deploy
```

---

## 🌍 URL del Sito

Una volta deployato, il sito sarà disponibile su:

**🔗 https://mountain-fauna-lover.github.io**

---

## 🔍 Monitoraggio Deploy

### Come Verificare lo Stato del Deploy

1. Vai su **Actions** tab nel repository
2. Vedrai la lista dei workflow runs
3. Clicca sull'ultimo run per vedere i dettagli
4. Stati possibili:
   - 🟡 **In progress** - Deploy in corso (~2-3 min)
   - ✅ **Success** - Deploy completato con successo
   - ❌ **Failed** - Errore durante il deploy (controlla i logs)

### Log del Deploy

Se il deploy fallisce:
1. Clicca sul workflow fallito
2. Clicca sul job **build** o **deploy**
3. Espandi gli steps per vedere l'errore
4. Correggi l'errore e fai push di nuovo

---

## 🐛 Troubleshooting

### Errore: "Permission denied"

**Soluzione:**
- Vai su Settings → Actions → General
- Abilita "Read and write permissions"

### Errore: "API Key not found"

**Soluzione:**
- Verifica che i GitHub Secrets siano configurati correttamente
- Controlla che i nomi dei secrets siano esatti (case-sensitive)
- Nomi corretti: `VITE_YOUTUBE_API_KEY` (NON `YOUTUBE_API_KEY`)

### Errore: "404 Not Found" dopo deploy

**Soluzione:**
- Verifica che il file `.nojekyll` sia presente in `/public`
- Controlla che `base: '/'` sia impostato in `vite.config.ts`
- Aspetta 2-3 minuti che GitHub Pages si aggiorni

### Deploy bloccato su "Waiting"

**Soluzione:**
- Vai su Settings → Environments → github-pages
- Rimuovi eventuali "Required reviewers"
- Il deploy dovrebbe procedere automaticamente

### Statistiche non funzionano in produzione

**Soluzione:**
- Verifica che i GitHub Secrets siano stati aggiunti
- Controlla i logs del build in Actions per errori API
- Assicurati che l'API Key YouTube sia valida e non scaduta

---

## 🔄 Workflow di Sviluppo

### 1. Sviluppo Locale

```bash
# Lavora in locale
npm run dev

# Testa le modifiche su http://localhost:8080
```

### 2. Test Build Locale

```bash
# Build di produzione in locale
npm run build

# Preview del build
npm run preview
```

### 3. Deploy in Produzione

```bash
# Commit e push
git add .
git commit -m "feat: Add new feature"
git push origin main

# Deploy automatico via GitHub Actions
# Sito aggiornato in ~2-3 minuti
```

---

## 📊 Statistiche Cache

Il sito usa **localStorage cache** con scadenza di 24h:

- **Prima visita utente**: Chiama API (~2s)
- **Visite successive**: Legge da cache (<100ms)
- **Dopo 24h**: Aggiorna automaticamente

Questo riduce il carico sulle API e migliora le performance.

---

## 🔒 Sicurezza

### ✅ Cosa È Protetto

- ✅ API Keys sono in GitHub Secrets (non nel codice)
- ✅ `.env.local` è in `.gitignore` (mai committato)
- ✅ Secrets non visibili nei logs pubblici
- ✅ Build environment isolato

### ⚠️ Nota Importante

Le API keys vengono **embedded nel bundle JavaScript** durante il build. Questo è normale per applicazioni client-side. Le key dovrebbero avere:
- Restrizioni HTTP Referrer (solo dal tuo dominio)
- Quota limits configurati
- Solo permessi necessari (read-only)

---

## 📈 Performance

### Ottimizzazioni Applicate

- ✅ Code splitting automatico
- ✅ Tree shaking (rimozione codice non usato)
- ✅ Minification (Terser)
- ✅ CSS minification
- ✅ Asset optimization
- ✅ localStorage cache (24h)
- ✅ Manual chunks per vendor libraries

### Metriche Attese

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Stats Load (cached)**: < 100ms

---

## 🆘 Supporto

Se incontri problemi:

1. **Controlla i logs**: Actions tab → Ultimo workflow → Build logs
2. **Verifica secrets**: Settings → Secrets and variables → Actions
3. **Test locale**: `npm run build && npm run preview`
4. **Controlla le issues**: Problemi comuni su GitHub

---

## 🎯 Checklist Deploy

Prima di fare il primo deploy, assicurati di:

- [ ] Repository configurato correttamente
- [ ] GitHub Secrets aggiunti (almeno YouTube)
- [ ] GitHub Pages abilitato (Source: GitHub Actions)
- [ ] Workflow permissions impostati (Read and write)
- [ ] File `.nojekyll` presente in `/public`
- [ ] `vite.config.ts` ha `base: '/'`
- [ ] Build locale funziona (`npm run build`)
- [ ] `.gitignore` include `.env.local`

Fatto? Fai push e il sito sarà online in pochi minuti! 🚀

---

**Sito Live:** https://mountain-fauna-lover.github.io

**Creato per Mountain & Fauna Lover** 🏔️🦌
