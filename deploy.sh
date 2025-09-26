#!/bin/bash

# Script de déploiement pour Adalink
echo "🚀 Déploiement d'Adalink en cours..."

# Nettoyer et construire
echo "🧹 Nettoyage et construction..."
npm run build

# Vérifier que les fichiers sont bien générés
echo "✅ Vérification des fichiers..."
if [ ! -f "out/logo.png" ]; then
    echo "❌ Erreur: logo.png manquant dans le build"
    exit 1
fi

if [ ! -f "out/index.html" ]; then
    echo "❌ Erreur: index.html manquant dans le build"
    exit 1
fi

# Définir les permissions correctes
echo "🔧 Configuration des permissions..."
find out/ -type f -name "*.png" -exec chmod 644 {} \;
find out/ -type f -name "*.jpg" -exec chmod 644 {} \;
find out/ -type f -name "*.jpeg" -exec chmod 644 {} \;
find out/ -type f -name "*.gif" -exec chmod 644 {} \;
find out/ -type f -name "*.svg" -exec chmod 644 {} \;
find out/ -type f -name "*.css" -exec chmod 644 {} \;
find out/ -type f -name "*.js" -exec chmod 644 {} \;
find out/ -type f -name "*.html" -exec chmod 644 {} \;
find out/ -type f -name "*.txt" -exec chmod 644 {} \;
find out/ -type f -name "*.xml" -exec chmod 644 {} \;
find out/ -type f -name ".htaccess" -exec chmod 644 {} \;

# Afficher un résumé
echo "📊 Résumé du build:"
echo "  - Pages générées: $(find out/ -name "*.html" | wc -l)"
echo "  - Assets statiques: $(find out/ -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.css" -o -name "*.js" \) | wc -l)"
echo "  - Taille totale: $(du -sh out/ | cut -f1)"

echo "✅ Build terminé avec succès!"
echo "📁 Fichiers prêts dans le dossier 'out/'"
echo ""
echo "📝 Instructions de déploiement:"
echo "  1. Uploadez tout le contenu du dossier 'out/' sur votre serveur"
echo "  2. Assurez-vous que le fichier .htaccess est bien uploadé"
echo "  3. Vérifiez les permissions des fichiers (644 pour les fichiers, 755 pour les dossiers)"
echo "  4. Testez l'accès direct: https://adalink.fr/logo.png"
echo "  5. Testez la page de diagnostic: https://adalink.fr/image-test.html"
echo ""
echo "🔧 Corrections appliquées pour la production:"
echo "  ✅ robots.txt: N'bloque plus les ressources statiques"
echo "  ✅ .htaccess: Autorise explicitement les images en priorité"
echo "  ✅ Next.js Image: Restauré avec unoptimized pour la compatibilité"
echo "  ✅ URLs corrigées: adalink.fr au lieu de adalink.dj"
echo "  ✅ manifest.json: Autorisé dans .htaccess"
echo "  ✅ Logos Firebase: URLs externes fiables et optimisées"
echo ""
echo "🔗 URLs des logos utilisées:"
echo "  📱 Logo principal: https://firebasestorage.googleapis.com/v0/b/navimove-b433a.firebasestorage.app/o/logo.png?alt=media&token=b900b14e-cb31-4761-aae3-d22409dc9878"
echo "  🎨 Logo sans fond: https://firebasestorage.googleapis.com/v0/b/navimove-b433a.firebasestorage.app/o/logo-withoutbg.png?alt=media&token=5048627c-2c13-478b-864b-2242f6d06a00"
