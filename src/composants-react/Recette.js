import React from 'react'

import Bouton from './Bouton'
import Carte from './Carte'

const Recette = ({
  recette,
  demandeDeRecherche,
}) => {
  const élémentDuTitre = transformeLeTitreEnÉlément(recette.titre, demandeDeRecherche)

  return (
    <Bouton
      quandOnCliqueFaire={() => {
        console.log('hello')
      }}
    >
      <Carte>
        <div>
          {élémentDuTitre}
        </div>
      </Carte>
    </Bouton>
  )
}

export default Recette

const transformeLeTitreEnÉlément = (titre, demandeDeRecherche) => {
  const styleDesLettresQuiMatch = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  }
  const tableauDeLettres = demandeDeRecherche.split('')
  const recursive = (titre) => {
    if (tableauDeLettres.length) {
      const letter = tableauDeLettres.shift()
      const lettreEnMinuscule = letter.toLocaleLowerCase()
      const réponse = essaieDeCouperLeTitreAvecLaLettre(titre, lettreEnMinuscule)
      if (réponse) {
        return réponse
      } else {
        const lettreEnMajuscule = letter.toLocaleUpperCase()
        const réponse = essaieDeCouperLeTitreAvecLaLettre(titre, lettreEnMajuscule)
        if (réponse) {
          return réponse
        } else {
          return <React.Fragment/>
        }
      }
    } else {
      return <span>{titre}</span>
    }
  }

  const essaieDeCouperLeTitreAvecLaLettre = (titre, letter) => {
    const match = titre.match(`.*?${letter}`)
    if (match) {
      return (
        <React.Fragment>
          <span>
            {match[0].slice(0, -1)}
          </span>
          <span style={styleDesLettresQuiMatch}>
            {match[0].slice(-1)}
          </span>
          <span>
            {recursive(titre.slice(match[0].length))}
          </span>
        </React.Fragment>
      )
    } else {
      return null
    }
  }

  return recursive(titre)
}
