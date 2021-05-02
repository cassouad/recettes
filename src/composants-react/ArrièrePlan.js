import React from 'react'

const ArrièrePlan = ({
  couleur,
  children,
}) => {
  return (
    <div style={{
      backgroundColor: couleur,
      minHeight: '100vh',
      display: 'flex',
    }}>
      <div style={{
        flex: '1 1 auto'
      }}/>
      <div style={{
        width: '1000px',
        maxWidth: '400px',
        flex: '0 1 auto',
      }}>
        {children}
      </div>
      <div style={{
        flex: '1 1 auto'
      }}/>
    </div>
  )
}

export default ArrièrePlan
