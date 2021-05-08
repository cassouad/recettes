import React from 'react'

const ChampDeTexte = ({
  valeur,
  setValeur,
  texteQuiSAfficheQuandPasDeValeur,
  style,
  focusElementQuandIlEstCréé = false,
  enregistrerDesActions,
  nettoyerDesActions,
}) => {
  const ref = React.useRef(null)

  useFocusElementQuandIlEstCréé({
    ref,
    focusElementQuandIlEstCréé,
  })

  useGérerLesActions({
    ref,
    enregistrerDesActions,
    nettoyerDesActions,
  })

  return (
    <input
      ref={ref}
      style={style}
      value={valeur}
      placeholder={texteQuiSAfficheQuandPasDeValeur}
      onChange={(event) => {
        setValeur(event.target.value)
      }}
    />
  )
}

export default ChampDeTexte

const useFocusElementQuandIlEstCréé = ({
  ref,
  focusElementQuandIlEstCréé,
}) => {
  React.useEffect(() => {
    if (focusElementQuandIlEstCréé) {
      ref.current.focus()
    }
  }, [ref, focusElementQuandIlEstCréé])
}

const useGérerLesActions = ({
  ref,
  enregistrerDesActions,
  nettoyerDesActions,
}) => {
  React.useEffect(() => {
    const focusLeChamp = () => ref.current.focus()
    const blurLeChamp = () => ref.current.blur()

    enregistrerDesActions?.({
      focusLeChamp,
      blurLeChamp,
    })
    return () => {
      nettoyerDesActions?.({
        focusLeChamp,
        blurLeChamp,
      })
    }
  }, [ref, enregistrerDesActions, nettoyerDesActions])
}
