import React from 'react'
import Recherche from '../modules/recherche'

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
      const [
        avantLaPremièreOccurrenceDeLaLettre,
        premièreOccurrenceDeLaLettre,
        aprèsLaPremièreOccurrenceDeLaLettre,
      ] = Recherche.coupeLaChaîneAvecLaLettre({
        lettre,
        chaîne: titre,
      })
      return (
        <React.Fragment>
          <span>
            {avantLaPremièreOccurrenceDeLaLettre}
          </span>
          <span style={styleDesLettresQuiMatch}>
            {premièreOccurrenceDeLaLettre}
          </span>
          <span>
            {recursive(aprèsLaPremièreOccurrenceDeLaLettre)}
          </span>
        </React.Fragment>
      )
    } else {
      return <span>{titre}</span>
    }
  }

  return recursive(titre)
}
