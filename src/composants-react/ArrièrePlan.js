import React from 'react'

const ArrièrePlan = ({
  children,
}) => {
  return (
    <div style={{
      backgroundColor: '#e6eef7',
      padding: '20px',
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
