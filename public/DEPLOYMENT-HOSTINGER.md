# Guide de Déploiement - Adalink sur Hostinger

## Fichiers à Déployer

Ce dossier `public/` contient tous les fichiers nécessaires pour le déploiement sur Hostinger.

### Fichiers Principaux

- **`.htaccess`** - Configuration Apache avec optimisations, sécurité et redirections
- **`sitemap.xml`** - Plan du site pour les moteurs de recherche
- **`robots.txt`** - Instructions pour les robots d'indexation
- **`manifest.json`** - Configuration PWA pour l'installation d'application
- **`favicon.ico`** + **`logo.png`** - Icônes du site

### Fichiers de Transparence

- **`humans.txt`** - Informations sur l'équipe et les technologies
- **`security.txt`** - Contact pour signaler des vulnérabilités
- **`.well-known/security.txt`** - Version standardisée RFC 9116
- **`ads.txt`** - Configuration publicitaire (vide pour l'instant)

## Instructions de Déploiement

### 1. Préparation - UNE SEULE COMMANDE !
```bash
# Génère le build de production ET copie tous les fichiers nécessaires
npm run build
```

Cette commande fait automatiquement :
- ✅ Compilation Next.js optimisée
- ✅ Génération des fichiers statiques dans `out/`
- ✅ Copie des fichiers du dossier `public/` vers `out/`
- ✅ Prêt pour le déploiement !

### 2. Téléchargement sur Hostinger

1. **Accédez au File Manager** de votre compte Hostinger
2. **Naviguez vers le dossier public_html** de votre domaine
3. **Supprimez tout contenu existant** (sauf .htaccess si vous en avez un personnalisé)
4. **Téléchargez TOUT le contenu** du dossier `out/` généré
5. **C'est terminé !** 🎉

### 3. Configuration SSL

1. Dans votre panneau Hostinger, activez le **SSL gratuit**
2. Une fois activé, décommentez ces lignes dans `.htaccess` :
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 4. Vérifications Post-Déploiement

- ✅ **Site accessible** : https://adalink.dj
- ✅ **Redirections HTTPS** : http://adalink.dj → https://adalink.dj
- ✅ **Pages fonctionnelles** : /, /services, /contact, etc.
- ✅ **Sitemap accessible** : https://adalink.dj/sitemap.xml
- ✅ **Robots.txt accessible** : https://adalink.dj/robots.txt
- ✅ **Manifest PWA** : https://adalink.dj/manifest.json

### 5. Scripts Disponibles

```bash
# Développement
npm run dev

# Build complet pour production
npm run build

# Build + Validation (RECOMMANDÉ pour déploiement)
npm run deploy-ready

# Déploiement (alias de build)
npm run deploy

# Export seulement (sans copie des fichiers publics)
npm run export

# Copie des fichiers publics seulement
npm run copy-public

# Nettoyer le dossier out
npm run clean

# Valider que tous les fichiers essentiels sont présents
npm run validate
```

### 6. Workflow de Déploiement Recommandé

```bash
# Commande unique pour tout préparer
npm run deploy-ready
```

Cette commande fait automatiquement :
- 🧹 **Nettoyage** : Supprime l'ancien dossier `out/`
- 🔨 **Build** : Compilation Next.js optimisée
- 📁 **Copie** : Copie des fichiers publics vers `out/`
- ✅ **Validation** : Vérification que tous les fichiers essentiels sont présents
- 🎯 **Confirmation** : Message de succès avec le dossier à déployer

### 7. Tests de Performance

Utilisez ces outils pour vérifier les performances :
- **Google PageSpeed Insights**
- **GTmetrix**
- **Pingdom Website Speed Test**

### 8. Configuration DNS (si nécessaire)

Si le domaine n'est pas encore configuré :
```
Type: A
Name: @
Value: [IP du serveur Hostinger]

Type: CNAME
Name: www
Value: adalink.dj
```

## Structure du dossier `out/` généré

```
out/
├── .htaccess                    # Configuration Apache
├── index.html                   # Page d'accueil
├── sitemap.xml                  # Plan du site
├── robots.txt                   # Instructions robots
├── manifest.json                # Configuration PWA
├── favicon.ico                  # Icône du site
├── logo.png                     # Logo
├── humans.txt                   # Informations équipe
├── security.txt                 # Contact sécurité
├── ads.txt                      # Configuration publicitaire
├── services/
│   └── index.html              # Page services
├── contact/
│   └── index.html              # Page contact
├── mentions-legales/
│   └── index.html              # Page mentions légales
├── politique-confidentialite/
│   └── index.html              # Page politique
├── conditions-utilisation/
│   └── index.html              # Page conditions
├── 404/
│   └── index.html              # Page 404
├── .well-known/
│   └── security.txt            # Contact sécurité (standard)
└── _next/                      # Assets Next.js (CSS, JS, etc.)
    ├── static/
    └── [build-id]/
```

## Notes Importantes

- **Cache activé** : Les fichiers statiques sont mis en cache 1 an
- **Compression GZIP** : Activée pour tous les types de fichiers
- **Sécurité renforcée** : Headers de sécurité et protection contre les attaques
- **SEO optimisé** : Sitemap, robots.txt et metadata configurés
- **PWA Ready** : Installation possible sur mobile/desktop

## Support

En cas de problème, contactez :
- **Email** : adalink1423@gmail.com
- **Support Hostinger** : Via le panneau de contrôle

---

**Date de création** : 26 janvier 2025  
**Version** : 1.1  
**Développé avec** : Next.js 14, Tailwind CSS, Framer Motion 