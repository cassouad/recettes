import React from 'react'

import Bouton from './Bouton'

const Commande = ({
  nom,
  commande,
}) => {
  const styleCommun = {
    padding: '10px',
    borderRadius: '10px',
    background: '#f7ece6',
    border: '1px solid hsl(21deg 52% 63%)',
    color: 'hsl(21deg 52% 39%)',
  }

  return (
    <Bouton
      style={styleCommun}
      styleQuandLaSourisEstAuDessus={{
        ...styleCommun,
        background: 'hsl(21deg 88% 87%)',
      }}
      quandOnCliqueFaire={commande}
    >
      {`> ${nom}`}
    </Bouton>
  )
}

export default Commande
