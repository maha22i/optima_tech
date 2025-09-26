# AdaLink

Une application Next.js moderne construite avec TypeScript et Tailwind CSS, suivant les meilleures pratiques d'architecture.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Développement type-safe
- **Tailwind CSS** - Framework CSS utilitaire
- **ESLint** - Linting et qualité de code

## 📁 Structure du projet

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Styles globaux avec Tailwind
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Page d'accueil
│   └── about/            # Page à propos
├── components/           # Composants réutilisables
│   ├── Hero/            # Composant Hero (Container/Presenter)
│   ├── Features/        # Composant Features
│   └── ui/              # Composants UI de base
│       └── Button/      # Composant Button réutilisable
├── types/               # Définitions TypeScript
├── utils/               # Fonctions utilitaires
└── styles/              # Styles additionnels
```

## 🏗️ Architecture

Ce projet suit le pattern **Container/Presenter** :

- **Container** (BusinessLogic.tsx) : Gère la logique métier et les états
- **Presenter** (BusinessLogicPresenter.tsx) : Gère uniquement l'affichage

### Exemple de structure de composant :

```
components/
└── MyComponent/
    ├── MyComponent.tsx           # Container (logique)
    ├── MyComponentPresenter.tsx  # Presenter (affichage)
    └── index.ts                 # Export barrel
```

## 🛠️ Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Vérifie la qualité du code avec ESLint
- `npm run type-check` - Vérifie les types TypeScript

## 🎨 Styling avec Tailwind CSS

Le projet utilise Tailwind CSS avec :
- Configuration personnalisée des couleurs primaires
- Polices personnalisées (Inter)
- Classes utilitaires optimisées
- Support du mode sombre

## 🔧 Configuration

- **TypeScript** : Configuration stricte avec alias de chemins
- **ESLint** : Règles Next.js et TypeScript
- **Tailwind** : Configuration personnalisée avec couleurs primaires
- **PostCSS** : Intégration avec Tailwind et Autoprefixer

## 📦 Composants réutilisables

### Button
Composant bouton avec variants et tailles :
```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Mon bouton
</Button>
```

### Utilitaires
- `cn()` : Fonction de merge des classes CSS avec clsx et tailwind-merge

## 🚀 Déploiement

L'application est prête pour le déploiement sur :
- **Vercel** (recommandé)
- **Netlify**
- **AWS Amplify**
- Tout hébergeur supportant Node.js

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs) 