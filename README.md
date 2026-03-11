# Younes Gallouch — Portfolio Next.js

Site portfolio personnel construit avec Next.js.

## 🚀 Lancer le projet

### 1. Installer les dépendances
```bash
npm install
```

### 2. Démarrer en mode développement
```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

### 3. Build pour la production
```bash
npm run build
npm start
```

## 📁 Structure du projet

```
younes-portfolio/
├── pages/
│   ├── _app.js          # App principale (cursor custom)
│   ├── _document.js     # HTML document
│   └── index.js         # Page d'accueil
├── components/
│   ├── Navbar.js/.css   # Navigation fixe
│   ├── Hero.js/.css     # Section d'accueil
│   ├── About.js/.css    # Section profil
│   ├── Skills.js/.css   # Compétences & langages
│   ├── Experience.js/.css # Expérience pro
│   ├── Formation.js/.css  # Formation & langues
│   ├── Contact.js/.css   # Contact
│   └── Footer.js/.css    # Pied de page
├── styles/
│   └── globals.css      # Styles globaux
├── public/              # Images statiques
├── next.config.js
└── package.json
```

## 🎨 Personnalisation

### Ajouter ta photo
Remplace la section `.photoPlaceholder` dans `components/About.js` par :
```jsx
<img src="/ta-photo.jpg" alt="Younes Gallouch" className={styles.photo} />
```
Et place `ta-photo.jpg` dans le dossier `public/`.

### Modifier les infos
Toutes les données personnelles sont dans les composants respectifs.

## 🌐 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload le dossier .next sur Netlify
```
# portfolio
