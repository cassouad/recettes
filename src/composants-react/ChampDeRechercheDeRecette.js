import React from 'react'
import ChampDeTexte from './ChampDeTexte'

const ChampDeRechercheDeRecette = ({
  demandeDeRecherche,
  setDemandeDeRecherche,
  enregistrerDesActions: enregistrerDesActionsDuParent,
  nettoyerDesActions,
}) => {
  const [actions, setActions] = React.useState({})
  const enregistrerDesActions = React.useCallback((actions) => {
    setActions(actions)
    enregistrerDesActionsDuParent(actions)
  }, [enregistrerDesActionsDuParent])

  useQuandSurMobileOnScrollOnEnlèveLeFocus({
    actions,
  })

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

const useQuandSurMobileOnScrollOnEnlèveLeFocus = ({
  actions,
}) => {
  React.useEffect(() => {
    const onTouchmove = () => {
      actions.blurLeChamp?.()
    }
    window.addEventListener('touchmove', onTouchmove)
    return () => {
      window.removeEventListener('touchmove', onTouchmove)
    }
  })
}
