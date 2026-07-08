# MÉMO — Site de recettes (RECETTES / CATrecettes)

Adresse du site en ligne : **https://cassouad.github.io/recettes/**

---

## PARTIE 1 — L'essentiel à retenir (Patrice)

- **Node 16 obligatoire.** Le projet plante (erreur « BigInt ») sous Node 18+.
  Toujours faire `nvm use 16` avant toute commande yarn.

- **Le dépôt GitHub appartient à Catherine** (compte `cassouad`).
  Le site ne se met à jour que quand **Catherine** lance `yarn updateGithubPage`
  (sa dernière étape publie en ligne). Patrice ne publie pas depuis sa machine.

- **Transmission Patrice → Catherine = copie de fichiers** (AirDrop / clé USB / email),
  PAS via GitHub.
  - On copie les **fichiers source** qu'on modifie :
    - une recette → `src/recettes/xxx.json`
    - le `package.json` (si on le change)
  - On ne copie **JAMAIS** les fichiers `docs/…bundle.js` : ils sont **fabriqués
    automatiquement** par webpack à chaque publication.

- **lint et test ont été retirés** du script `updateGithubPage` (ils plantaient en PnP).
  Le script fait maintenant : vérifier que tout est enregistré → construire → publier.
  Pour lancer lint/test à la main (facultatif), c'est sur la machine de Patrice.

- Après publication, le site est à jour en **1 à 2 minutes**.
  Forcer le rafraîchissement du navigateur : **Cmd + Shift + R**.

---

## PARTIE 2 — Ce que Catherine doit faire pour publier

Dans le Terminal, dans le dossier du projet :

```
cd ~/Desktop/recettes
```

**1. Passer sous Node 16** (à refaire dans chaque nouveau Terminal) :
```
nvm use 16
node --version          → doit afficher v16.xxx
```

**2. Enregistrer les modifications** (sinon la 1ʳᵉ étape s'arrête) :
```
git add -A
git commit -m "mise à jour des recettes"
```
(Si « nothing to commit », c'est qu'il n'y a rien de nouveau : on continue.)

**3. Publier :**
```
yarn updateGithubPage
```
Fin réussie = un message du genre :
`To github.com:cassouad/recettes.git   xxxxxxx..xxxxxxx  master -> master`

**4. Vérifier :** ouvrir https://cassouad.github.io/recettes/ puis **Cmd + Shift + R**.

---

## PARTIE 3 — Si ça bloque

- **Crash « BigInt.prototype.toString »** → Node n'est pas en 16.
  Refaire `nvm use 16`, vérifier `node --version`.

- **S'arrête tout de suite sur `git diff`** → modifs non enregistrées.
  Faire `git add -A && git commit -m "..."` puis relancer.

- **`Unable to deserialize cloned data`** → `rm .yarn/install-state.gz` puis relancer.

- **« HOST KEY CHANGED » au push** → faire une fois :
  ```
  ssh-keygen -R github.com
  ssh-keyscan github.com >> ~/.ssh/known_hosts
  ```
  Vérif : `ssh -T git@github.com` doit répondre « Hi cassouad! … successfully authenticated ».

- **`rejected` / `non-fast-forward` au push** → historique divergent.
  Ne PAS forcer : demander de l'aide (manip au cas par cas).

---

## PARTIE 4 — État connu (juillet 2026)

- Site vérifié à jour et en ligne (dont la crème brûlée révisée).
- Comparaison des deux copies : **Catherine a toutes les recettes de Patrice**, plus 3 en
  supplément (*Crème au beurre*, *Sauce Nantua*, *Tartiflette*). Si Patrice les veut, c'est
  Catherine qui les lui copie.
- En attente de publication par Catherine : correction de l'accent du titre
  **« Crème brûlée »** (fichier `creme_brulee.json` à lui transmettre).
