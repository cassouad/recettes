# Recettes

## Tutorial

### Prérequis : utiliser Node 16 (et non Node 22)

Ce projet utilise Yarn 2 (mode « Plug'n'Play ») et une chaîne d'outils de 2021.
Il **doit être lancé avec Node 16** : avec Node 18 ou plus récent (par ex. Node 22),
`yarn start` plante avec l'erreur
`TypeError: BigInt.prototype.toString requires that 'this' be a BigInt`.

On gère les versions de Node avec [nvm](nvm use 16).

La première fois seulement, installer Node 16 :
```sh
nvm install 16
```

Ensuite, **à chaque nouveau terminal** avant de travailler sur le projet,
basculer sur Node 16 :
```sh
nvm use 16
node -v   # doit afficher v16.x.x
```

Pour revenir plus tard à sa version habituelle (par ex. Node 22) :
```sh
nvm use 22          # dans le terminal courant
# ou pour la remettre par défaut dans tous les nouveaux terminaux :
nvm alias default 22
```

> Astuce : pour que `nvm use 16` soit automatique en entrant dans le dossier,
> il y a un fichier `.nvmrc` (contenant `16`) à la racine du projet ;
> `nvm use` (sans numéro) lira alors la bonne version tout seul.

> En cas d'erreur `Unable to deserialize cloned data` après avoir changé de version
> de Node, supprimer le cache d'installation : `rm -f .yarn/install-state.gz`, puis relancer.

### Lancer le serveur

Pour lancer le serveur web de développement :
```sh
nvm use 16   # si ce n'est pas déjà fait dans ce terminal
yarn start
# puis ouvrir un navigateur à l'adresse : http://localhost:8080/
# le site se recharge automatiquement à chaque changement
```

Pour envoyer les changements sur github
```sh
git status
git add . && git commit -m "Nom de la sauvegarde"
git push
```
ou bien, en utilisant l'éditeur de texte nano
```sh
git status
git add .
git commit
# git commit va ouvrir l'éditeur nano
# il faut écrire son message dans l'éditeur
# une fois le message écrit, faire « controle c » (et non pas « command c ») pour fermer l'éditeur
# l'éditeur demande si il faut sauvegarder les changements (répondre « Y »)
# En fin, l'éditeur demande de confirmer le nom du fichier (appuyer sur « Entrée »)
git push
```
Une fois les changements « push » sur github, on peut vérifier que tout va bien en lançant :
```sh
git status
# On doit voir, afficher à l'écran,
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

Pour générer le site web en mode production et pour mettre à jour github page :
```sh
yarn updateGithubPage
# cette commande met à jour le dossier /docs qui
# sera utilisé par github pour servir le site web
```
