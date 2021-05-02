# Recettes

## Tutorial

Pour lancer le serveur web de développement :
```sh
yarn start
# puis ouvrir un navigateur à l'adresse : http://localhost:8080/
# le site se recharge automatiquement à chaque changement
```

Pour générer le site web en mode production et pour mettre à jour github page :
```sh
yarn build
# cette commande met à jour le dossier /docs qui
# sera utilisé par github pour servir le site web
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
