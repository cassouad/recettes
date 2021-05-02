import React from 'react'

const TitreDeLaRecette = ({
  titre,
  demandeDeRecherche,
}) => {
  return transformeLeTitreEnÉlément(titre, demandeDeRecherche)
}

export default TitreDeLaRecette

const transformeLeTitreEnÉlément = (titre, demandeDeRecherche) => {
  const styleDesLettresQuiMatch = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  }
  const tableauDeLettres = demandeDeRecherche.split('')
  const recursive = (titre) => {
    if (tableauDeLettres.length) {
      const lettre = tableauDeLettres.shift()
      const réponse = essaieDeCouperLeTitreAvecLaLettre(titre, lettre)
      if (réponse) {
        return réponse
      } else {
        return <React.Fragment />
      }
    } else {
      return <span>{titre}</span>
    }
  }

  const essaieDeCouperLeTitreAvecLaLettre = (titre, lettre) => {
    const lettreEnMinuscule = lettre.toLocaleLowerCase()
    const lettreEnMajuscule = lettre.toLocaleUpperCase()
    const minusculeMatch = titre.match(`.*?${lettreEnMinuscule}`)
    const majusculeMatch = titre.match(`.*?${lettreEnMajuscule}`)

    let match
    if (minusculeMatch && majusculeMatch) {
      if (minusculeMatch[0].length < majusculeMatch[0].length) {
        match = minusculeMatch
      } else {
        match = majusculeMatch
      }
    } else if (minusculeMatch) {
      match = minusculeMatch
    } else if (majusculeMatch) {
      match = majusculeMatch
    } else {
      match = null
    }

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
