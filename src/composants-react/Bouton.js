import React from 'react'

const Bouton = ({
  quandOnCliqueFaire=() => {},
  children,
}) => {
  return (
    <button
      style={{
        width: '100%',
        padding: 0,
        margin: 0,
        border: 'none',
        cursor: 'pointer',
        textAlign: 'inherit',
      }}
      onClick={quandOnCliqueFaire}
    >
      {children}
    </button>
  )
}

export default Bouton
