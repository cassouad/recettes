import React from 'react'

const AuteurDeLaRecette = ({
  auteur,
  paddingTop,
}) => {
  if (auteur) {
    return (
      <div style={{
        paddingTop,
        textAlign: 'right',
        fontSize: '14px',
        color: '#525252',
        textDecoration: 'underline',
      }}>
        {auteur}
      </div>
    )
  } else {
    return <div/>
  }
}

export default AuteurDeLaRecette
