import React from 'react'
import Recherche from '../modules/recherche'

const RésultatDUneRecherche = ({
  résultat,
  demandeDeRecherche,
}) => {
  
  return transformeLeRésultatEnÉlément(résultat, demandeDeRecherche)
}

export default RésultatDUneRecherche

const transformeLeRésultatEnÉlément = (résultat, demandeDeRecherche) => {
  const styleDesLettresQuiMatch = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  }

  const tableauDeLettres = Recherche.formateLaDemande({
    demande: demandeDeRecherche,
  }).split('')

  const recursive = (résultat) => {
    if (tableauDeLettres.length) {
      const lettre = tableauDeLettres.shift()
      const [
        avantLaPremièreOccurrenceDeLaLettre,
        premièreOccurrenceDeLaLettre,
        aprèsLaPremièreOccurrenceDeLaLettre,
      ] = Recherche.coupeLaChaîneAvecLaLettre({
        lettre,
        chaîne: résultat,
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
      return <span>{résultat}</span>
    }
  }

  return recursive(résultat)
}
