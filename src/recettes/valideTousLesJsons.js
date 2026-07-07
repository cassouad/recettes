const {
  validate,
} = require('jsonschema')

const fs = require('fs')
const path = require('path')

const tableauDesNomsDeFichiersÀIgnorer = [
  'schémaRecette.json',
]

const schéma = fs.readFileSync(path.join(__dirname, 'schémaRecette.json'), 'utf-8')

const tableauDesFichiersInvalides = []

fs.readdirSync(__dirname).forEach(nomDuFichier => {
  // Sur macOS, readdirSync renvoie les noms en Unicode NFD (décomposé),
  // alors que les littéraux du code source sont en NFC (composé).
  // On normalise les deux côtés pour que la comparaison fonctionne.
  const nomDuFichierNormalisé = nomDuFichier.normalize('NFC')
  if (tableauDesNomsDeFichiersÀIgnorer.includes(nomDuFichierNormalisé) === false) {
    const extensionDuFichier = path.extname(nomDuFichier)
    const extensionDesFichiersJson = '.json'
  
    if (extensionDuFichier === extensionDesFichiersJson) {
      const cheminDuFichier = path.join(__dirname, nomDuFichier)
      const contenuDuFichier = fs.readFileSync(cheminDuFichier, 'utf-8')
      try {
        const res = validate(
          JSON.parse(contenuDuFichier),
          JSON.parse(schéma),
        )
  
        if (res.valid === false) {
          tableauDesFichiersInvalides.push({
            nomDuFichier,
            errors: res.errors,
          })
        }
      } catch {
        tableauDesFichiersInvalides.push({
          nomDuFichier,
          errors: [{
            stack: 'Json invalide (JSON.parse a sans doute échoué)'
          }]
        })
      }
    }
  }
})

if (tableauDesFichiersInvalides.length) {
  console.error('Il y a des recettes qui ne respectent pas le schéma :')
  tableauDesFichiersInvalides.forEach(({nomDuFichier, errors}) => {
    console.error(nomDuFichier, '=>', errors[0].stack)
  })
}
