import React from 'react'
import ChampDeTexte from './ChampDeTexte'

const ChampDeRechercheDeRecette = ({
  demandeDeRecherche,
  setDemandeDeRecherche,
  enregistrerDesActions,
  nettoyerDesActions,
}) => {
  return (
    <ChampDeTexte
      valeur={demandeDeRecherche}
      setValeur={setDemandeDeRecherche}
      focusElementQuandIlEstCréé
      style={{
        width: '100%',
        padding: '12px',
        outline: 'none',
        border: '1px dashed #5a5a5a',
        fontSize: '16px',
        borderRadius: '10px',
      }}
      texteQuiSAfficheQuandPasDeValeur={'recherchez une recette !'}
      enregistrerDesActions={enregistrerDesActions}
      nettoyerDesActions={nettoyerDesActions}    
    />
  )
}

export default ChampDeRechercheDeRecette
