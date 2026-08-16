# DREAM — site enrichi (esquisse v2)

## Fichiers
- `index.html` — structure de la page (lie styles.css + script.js)
- `styles.css` — feuille de style complète (variables, composants, contrastes)
- `script.js` — toute la logique + les données (poètes, thèmes, glossaire, avis)
- `functions.php` — backend WordPress : enqueue des assets + AJAX pour les avis lecteurs
- `sky-bg.jpg` — ta photo, compressée pour le web
- `README.md` — ce fichier

## Prévisualiser
Ouvre `index.html` dans un navigateur. Le site fonctionne sans backend :
les avis lecteurs restent alors en mémoire le temps de la session
(rechargement = remise à zéro), avec un message qui l'indique clairement.

## Brancher le backend (avis persistants)
1. Place ces 4 fichiers (`index.html`, `styles.css`, `script.js`,
   `functions.php`) à la racine de ton thème WordPress actif.
2. `functions.php` enregistre automatiquement :
   - le chargement des styles/scripts (`dream_enqueue_assets`)
   - un custom post type `dream_review` (visible dans l'admin WP)
   - deux routes AJAX : `dream_submit_review` et `dream_get_reviews`
3. `script.js` poste déjà vers `/wp-admin/admin-ajax.php` — rien à
   modifier côté front si ton site tourne sous WordPress.
4. Si tu restes sur Astro plutôt que WordPress : remplace la fonction
   `submitReviewToServer()` dans `script.js` par un appel à ta propre
   route API (Astro endpoints, par ex. `src/pages/api/reviews.ts`),
   et adapte `functions.php` en une route serveur équivalente.

## Ce qui est nouveau dans cette version
- **45 auteurs** (9 français, 36 britanniques) avec bio courte, dates,
  filtre par nationalité — bouton « Tous les auteurs » en haut à droite.
- **Notes de bas de page** : les termes techniques (sublime, spleen,
  byronien...) dans le texte de chaque thème sont cliquables et
  renvoient à une définition en bas de panneau, avec surlignage.
- **Avis lecteurs** par auteur : notation par étoiles interactive,
  formulaire, persistance via `functions.php`.
- **Effets dynamiques** : lueur qui suit le curseur en fondu, parallaxe
  sur la photo, tilt 3D au survol des cartes, révélation en fondu au
  défilement (IntersectionObserver), transition en fondu-enchaîné
  entre les vues du panneau, scintillement et halo sur les étoiles.
- Tout respecte `prefers-reduced-motion`.

## À compléter toi-même
- Le texte des poèmes (emplacements « texte à intégrer » dans chaque
  fiche) — sourcer depuis Wikisource FR/EN, Gallica ou Poetry Foundation.
- Les dates de Charlotte Richardson, restées introuvables de façon fiable.
- Le positionnement des étoiles (`x`/`y` en % dans l'objet `themes` de
  `script.js`) — à ajuster une fois la photo vue en conditions réelles.
