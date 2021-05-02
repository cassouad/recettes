import React from 'react'

import Button from './Bouton'

const CarteBouton = ({
  children,
  quandOnCliqueFaire,
  couleurPrincipale,
}) => {
  const styleCommun = {
    transition: 'all 0.1s ease-out 0s',
    padding: '12px',
    borderRadius: '10px',
  }

  return (
    <Button
      style={{
        ...styleCommun,
        backgroundColor: 'white',
      }}
      styleQuandLaSourisEstAuDessus={{
        ...styleCommun,
        backgroundColor: couleurPrincipale,
        color: 'white',
      }}
      quandOnCliqueFaire={quandOnCliqueFaire}
    >
      {children}
    </Button>
  )
}

export default CarteBouton
