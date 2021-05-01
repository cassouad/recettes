import React from 'react'

const ChampDeTexte = ({
  valeur,
  setValeur,
  texteQuiSAfficheQuandPasDeValeur,
  style,
}) => {
  return (
    <input
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
