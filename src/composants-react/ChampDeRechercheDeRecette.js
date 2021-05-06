import React from 'react'
import ChampDeTexte from './ChampDeTexte'

const ChampDeRechercheDeRecette = ({
  demandeDeRecherche,
  setDemandeDeRecherche,
}) => {
  const [
    demandeDeRechercheAffichée,
    setDemandeDeRechercheAffichée
  ] = React.useState(demandeDeRecherche)

  return (
    <ChampDeTexte
      valeur={demandeDeRechercheAffichée}
      setValeur={(valeur) => {
        setDemandeDeRecherche(valeur.trim())
        setDemandeDeRechercheAffichée(valeur)
      }}
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
    />
  )
}

export default ChampDeRechercheDeRecette
