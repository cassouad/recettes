import React from 'react'

const Carte = ({
  children,
}) => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '12px',
      borderRadius: '10px',
    }}>
      {children}
    </div>
  )
}

export default Carte
