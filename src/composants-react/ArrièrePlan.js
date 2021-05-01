import React from 'react'

const ArrièrePlan = ({
  children,
}) => {
  return (
    <div style={{
      backgroundColor: '#e6eef7',
      padding: '20px 20%',
      minHeight: '100vh',
    }}>
      {children}
    </div>
  )
}

export default ArrièrePlan
