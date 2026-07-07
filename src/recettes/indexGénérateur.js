const fs = require('fs')
const path = require('path')

let contenuDuFichierIndex = ''
contenuDuFichierIndex += '// Ne pas éditer ce fichier.\n'
contenuDuFichierIndex += '// C\'est un fichier généré automatiquement\n'
contenuDuFichierIndex += '// à partir des fichiers json du dossier recettes.\n'
contenuDuFichierIndex += '\n'
contenuDuFichierIndex += 'export default [\n'

const tableauDesNomsDeFichiersÀIgnorer = [
  'schémaRecette.json',
]

fs.readdirSync(__dirname).forEach(nomDuFichier => {
  // Sur macOS, readdirSync renvoie les noms en Unicode NFD (décomposé),
  // alors que les littéraux du code source sont en NFC (composé).
  // On normalise les deux côtés pour que la comparaison fonctionne.
  const nomDuFichierNormalisé = nomDuFichier.normalize('NFC')
  if (tableauDesNomsDeFichiersÀIgnorer.includes(nomDuFichierNormalisé) === false) {
    const extensionDuFichier = path.extname(nomDuFichier)
    const extensionDesFichiersJson = '.json'
  
    if (extensionDuFichier === extensionDesFichiersJson) {
      const nomDuFichierSansExtension = path.basename(nomDuFichierNormalisé, extensionDesFichiersJson)
      contenuDuFichierIndex += `  require('./${nomDuFichierSansExtension}'),\n`
    }
  }
})

contenuDuFichierIndex += ']\n'

const cheminDuFichierIndex = path.join(__dirname, 'index.js')
if (
  fs.readFileSync(cheminDuFichierIndex, 'utf-8') !==
  contenuDuFichierIndex
) {
  fs.writeFileSync(path.join(__dirname, 'index.js'), contenuDuFichierIndex)
}
