import React from 'react'

const ChampDeTexte = ({
  valeur,
  setValeur,
  texteQuiSAfficheQuandPasDeValeur,
  style,
  focusElementQuandIlEstCréé = false,
}) => {
  const ref = React.useRef(null)

  useFocusElementQuandIlEstCréé({
    ref,
    focusElementQuandIlEstCréé,
  })

  return (
    <input
      ref={ref}
      style={{
        font: 'inherit',
        ...style
      }}
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
