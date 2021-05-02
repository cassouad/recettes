const fs = require('fs')
const path = require('path')

let contenuDuFichierIndex = ''
contenuDuFichierIndex += '// Ne pas éditer ce fichier.\n'
contenuDuFichierIndex += '// C\'est un fichier généré automatiquement\n'
contenuDuFichierIndex += '// à partir des fichiers json du dossier recettes.\n'
contenuDuFichierIndex += '\n'
contenuDuFichierIndex += 'export default [\n'

fs.readdirSync(__dirname).forEach(nomDuFichier => {
  const extensionDuFichier = path.extname(nomDuFichier)
  const extensionDesFichiersJson = '.json'

  if (extensionDuFichier === extensionDesFichiersJson) {
    const nomDuFichierSansExtension = path.basename(nomDuFichier, extensionDesFichiersJson)
    contenuDuFichierIndex += `  require('./${nomDuFichierSansExtension}'),\n`
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
