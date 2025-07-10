# Paroisse Saint Leonard - Kinshasa

Site web moderne de la paroisse Saint Leonard à Kinshasa, développé avec React et Vite.

## 🚀 Fonctionnalités

### Pages publiques
- **Accueil** - Page d'accueil avec sections principales
- **Histoire de la paroisse** - Historique et patrimoine
- **Patron de la paroisse** - Saint Leonard et ses miracles
- **Le curé et les prêtres** - Présentation de l'équipe paroissiale
- **Conseil pastoral** - Membres et missions du conseil
- **Groupes de vie** - Groupes paroissiaux et activités
- **Actualités** - Nouvelles et événements de la paroisse
- **Lectures du jour** - Lectures bibliques quotidiennes
- **Lectures de la semaine** - Lectures bibliques hebdomadaires
- **Galerie** - Photos et médias de la paroisse
- **Horaires des messes** - Planning des célébrations
- **Contact et localisation** - Informations de contact

### Administration
- **Interface d'administration** - Gestion du contenu du site
- **Authentification sécurisée** - Accès réservé aux administrateurs
- **Tableau de bord** - Vue d'ensemble et gestion des contenus

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Outil de build et serveur de développement
- **React Router** - Navigation entre les pages
- **Tailwind CSS** - Framework CSS utilitaire
- **React Icons** - Bibliothèque d'icônes
- **LocalStorage** - Stockage local pour l'authentification

## 📦 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Démarrage du serveur de développement
```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:5173`

## 🔐 Accès administrateur

### URL d'accès
- **Connexion :** `http://localhost:5173/admin`
- **Tableau de bord :** `http://localhost:5173/admin/dashboard`

### Identifiants
- **Utilisateur :** `admin`
- **Mot de passe :** `saintleonard2025`

## 🎨 Design et couleurs

### Palette de couleurs
- **Bleu principal :** `#19b6c9`
- **Bleu foncé :** `#0ea5b3`
- **Gris clair :** `#f8fafc`
- **Gris moyen :** `#64748b`
- **Blanc :** `#ffffff`

### Caractéristiques
- Design moderne et responsive
- Interface utilisateur intuitive
- Navigation fluide entre les pages
- Composants modulaires et réutilisables

## 📁 Structure du projet

```
saintleonard/
├── public/
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── components/          # Composants réutilisables
│   ├── pages/              # Pages de l'application
│   ├── data/               # Données statiques
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── index.html              # Template HTML
├── package.json            # Dépendances et scripts
├── vite.config.js          # Configuration Vite
└── README.md              # Documentation
```

## 🚀 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production

## 🔧 Configuration

### Variables d'environnement
Le projet utilise des données statiques stockées localement. Pour une future évolution, vous pouvez ajouter des variables d'environnement dans un fichier `.env` :

```env
VITE_API_URL=https://api.example.com
VITE_ADMIN_USERNAME=admin
VITE_ADMIN_PASSWORD=saintleonard2025
```

## 📝 Développement

### Ajout de nouvelles pages
1. Créez un nouveau composant dans `src/pages/`
2. Ajoutez la route dans `src/App.jsx`
3. Mettez à jour la navigation si nécessaire

### Modification du contenu
- **Contenu statique :** Modifiez directement les composants
- **Données :** Mettez à jour les fichiers dans `src/data/`
- **Administration :** Utilisez l'interface d'administration

## 🎯 Fonctionnalités à venir

- [ ] Système de gestion de contenu (CMS)
- [ ] Intégration avec une API backend
- [ ] Système de newsletter
- [ ] Galerie d'images dynamique
- [ ] Calendrier d'événements
- [ ] Système de réservation pour les sacrements

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

---

**Paroisse Saint Leonard - Kinshasa**  
*Site web moderne pour une paroisse dynamique*
