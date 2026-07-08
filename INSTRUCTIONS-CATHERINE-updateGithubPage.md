# RECETTES — publier la page web (`yarn updateGithubPage`)

✅ Résolu le 2026-07-08. Le site se publie maintenant correctement.

## Résumé de ce qui bloquait

- Le projet doit tourner sous **Node 16** (le vieux runtime Yarn PnP plante sous Node ≥ 18).
- Les étapes **lint** (eslint) et **test** (jest) plantaient (crash « BigInt ») à cause du PnP,
  même sous Node 16. Elles ont été **retirées** du script de publication (ce ne sont que des
  contrôles de confort, pas nécessaires pour publier).
- L'authentification GitHub de la machine de Catherine a été remise en état (clé d'hôte + clé du compte).

Le nouveau script `updateGithubPage` fait seulement : vérifier que tout est enregistré →
construire le site → publier.

---

## Le déroulé pour Catherine (à refaire à chaque mise à jour)

Toujours dans un Terminal, dans le dossier du projet :

```
cd ~/Desktop/recettes
```

### 1. Passer sous Node 16 (à refaire dans chaque nouveau Terminal)
```
nvm use 16
node --version        →  doit afficher v16.xxx
```

### 2. Enregistrer les modifications (indispensable)
Sinon la 1ʳᵉ étape (« dépôt propre ») s'arrête tout de suite.
```
git add -A
git commit -m "mise à jour des recettes"
```
(Si ça répond « nothing to commit », c'est qu'il n'y a rien de nouveau, on continue.)

### 3. Publier
```
yarn updateGithubPage
```
À la fin, un message du genre :
```
To github.com:cassouad/recettes.git
   xxxxxxx..xxxxxxx  master -> master
```
= **c'est publié**, la page web est à jour en une minute ou deux.

---

## Si ça bloque

- **Crash « BigInt.prototype.toString »** → Node n'est pas en version 16.
  Refaire `nvm use 16` puis vérifier `node --version`.

- **S'arrête tout de suite sur `git diff` (étape 1)** → il reste des modifs non enregistrées.
  Faire `git add -A && git commit -m "..."` puis relancer.

- **`Unable to deserialize cloned data`** → `rm .yarn/install-state.gz` puis relancer.

- **Message « HOST KEY CHANGED » au push** → la clé de GitHub a changé. Faire une fois :
  ```
  ssh-keygen -R github.com
  ssh-keyscan github.com >> ~/.ssh/known_hosts
  ```
  (Vérif : `ssh -T git@github.com` doit répondre « Hi cassouad! … successfully authenticated ».)

- **`rejected` / `non-fast-forward` au push** → l'historique a divergé. Ne pas forcer :
  demander de l'aide, c'est une manip à faire au cas par cas.

---

## Notes pour Patrice

- La commande `yarn start` (mode dév) fonctionne aussi, sous Node 16 : `nvm use 16 && yarn start`.
- Les vérifications lint/test ne sont plus dans la publication ; tu peux les lancer toi-même
  sur ta machine si besoin (`yarn lint`, `yarn test`) — mais elles crashent en PnP côté Catherine,
  donc à traiter séparément un jour si tu y tiens.
- L'avis GitHub « 58 vulnerabilities / Dependabot » est purement informatif (dépendances de 2021),
  sans impact sur la publication.
- Rappel : la transmission vers Catherine se fait par **copie de fichier** ; GitHub ne se met à
  jour que quand Catherine réussit `updateGithubPage`.
