# Template EmailJS pour le Formulaire de Recrutement

## Configuration dans EmailJS

**Service ID:** `service_7vixzuc`  
**Template ID:** `template_cdvlzsc`  
**Public Key:** `qAhyqdGUGl5uLDqT5`

## Template HTML à copier dans EmailJS

Copiez le code HTML ci-dessous dans votre template EmailJS (`template_cdvlzsc`) :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            margin: -30px -30px 30px -30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .badge {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            margin-top: 10px;
        }
        .section {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e0e0e0;
        }
        .section:last-child {
            border-bottom: none;
        }
        .section-title {
            font-size: 16px;
            font-weight: 600;
            color: #667eea;
            margin-bottom: 12px;
        }
        .info-row {
            display: flex;
            margin-bottom: 10px;
            padding: 8px 0;
        }
        .info-label {
            font-weight: 600;
            color: #555;
            min-width: 140px;
            flex-shrink: 0;
        }
        .info-value {
            color: #333;
            flex: 1;
        }
        .info-value a {
            color: #667eea;
            text-decoration: none;
        }
        .message-box {
            background-color: #f9f9f9;
            border-left: 4px solid #667eea;
            padding: 15px;
            border-radius: 4px;
            margin-top: 10px;
            font-style: italic;
            color: #555;
            white-space: pre-wrap;
        }
        .cv-info {
            background-color: #e3f2fd;
            border: 1px solid #90caf9;
            padding: 15px;
            border-radius: 4px;
            margin-top: 10px;
        }
        .cv-info strong {
            color: #1976d2;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
            text-align: center;
            color: #888;
            font-size: 12px;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Nouvelle Candidature</h1>
            <span class="badge">RECRUTEMENT</span>
        </div>

        <div class="section">
            <div class="section-title">📋 Informations Personnelles</div>
            <div class="info-row">
                <span class="info-label">Nom complet :</span>
                <span class="info-value highlight">{{name}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Email :</span>
                <span class="info-value"><a href="mailto:{{email}}">{{email}}</a></span>
            </div>
            <div class="info-row">
                <span class="info-label">Téléphone :</span>
                <span class="info-value">{{phone}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Date de candidature :</span>
                <span class="info-value">{{time}}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">💼 Poste et Expérience</div>
            <div class="info-row">
                <span class="info-label">Poste souhaité :</span>
                <span class="info-value highlight">{{position}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Niveau d'expérience :</span>
                <span class="info-value">{{experience}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Prétentions salariales :</span>
                <span class="info-value">{{salary}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Disponibilité :</span>
                <span class="info-value">{{availability}}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">🔗 Liens et Portfolio</div>
            <div class="info-row">
                <span class="info-label">Portfolio :</span>
                <span class="info-value">{{portfolio}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">LinkedIn :</span>
                <span class="info-value">{{linkedin}}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">✍️ Message de Motivation</div>
            <div class="message-box">{{message}}</div>
        </div>

        <div class="section">
            <div class="section-title">📄 CV Joint</div>
            <div class="cv-info">
                <div class="info-row">
                    <span class="info-label"><strong>Nom du fichier :</strong></span>
                    <span class="info-value"><strong>{{cv_filename}}</strong></span>
                </div>
                <div class="info-row">
                    <span class="info-label"><strong>Taille :</strong></span>
                    <span class="info-value"><strong>{{cv_size}}</strong></span>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>📧 Email envoyé automatiquement depuis le formulaire de recrutement</p>
            <p><strong>Netlink Solutions</strong> - Système de recrutement</p>
        </div>
    </div>
</body>
</html>
```

## Variables utilisées dans le template

- `{{name}}` - Nom complet du candidat
- `{{email}}` - Email du candidat
- `{{phone}}` - Téléphone du candidat
- `{{position}}` - Poste souhaité
- `{{experience}}` - Niveau d'expérience
- `{{portfolio}}` - Lien du portfolio
- `{{linkedin}}` - Lien LinkedIn
- `{{salary}}` - Prétentions salariales
- `{{availability}}` - Disponibilité
- `{{message}}` - Message de motivation
- `{{cv_filename}}` - Nom du fichier CV
- `{{cv_size}}` - Taille du fichier CV
- `{{time}}` - Date et heure de candidature

## Note importante sur les fichiers

EmailJS ne supporte pas directement l'envoi de fichiers en pièce jointe via l'API standard. Pour recevoir les fichiers CV :

1. **Option 1 (Recommandée)** : Utiliser un service de stockage de fichiers (Cloudinary, AWS S3, etc.) et envoyer le lien dans l'email
2. **Option 2** : Utiliser EmailJS avec un service qui supporte les pièces jointes (plan payant)
3. **Option 3** : Le fichier est converti en base64 dans le code, mais EmailJS ne peut pas l'attacher directement

Pour l'instant, le template affiche les informations du fichier (nom, taille). Le fichier lui-même peut être récupéré via l'API EmailJS ou en utilisant un service de stockage.

