import React from 'react'
import ChampDeTexte from './ChampDeTexte'

const ChampDeRechercheDeRecette = ({
  demandeDeRecherche,
  setDemandeDeRecherche,
}) => {
  return (
    <ChampDeTexte
      valeur={demandeDeRecherche}
      setValeur={setDemandeDeRecherche}
      style={{
        width: '100%',
        padding: '12px',
        outline: 'none',
        border: '1px dashed #5a5a5a',
        fontSize: '16px',
      }}
      texteQuiSAfficheQuandPasDeValeur={'Rechercher une recette ! 🥘🥗😋'}
    />
  )
}

export default ChampDeRechercheDeRecette
