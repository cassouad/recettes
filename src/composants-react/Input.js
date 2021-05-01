import React from 'react'

// refactoring ///////
const Input = ({
  valeur,
  setValeur,
  texteQuiSAfficheQuandPasDeValeur,
}) => {
  return (
    <input
      style={{
        width: '100%',
        padding: '12px',
        outline: 'none',
        border: '1px dashed #5a5a5a',
        fontSize: '16px',
      }}
      value={valeur}
      placeholder={texteQuiSAfficheQuandPasDeValeur}
      onChange={(event) => {
        setValeur(event.target.value)
      }}
    />
  )
}

export default Input
