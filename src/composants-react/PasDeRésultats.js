import React from 'react'

const PasDeRésultats = ({
  children,
}) => {
  return (
    <div style={{
      background: 'hsl(0deg 0% 93%)',
      padding: '10px',
      borderRadius: '10px',
      border: '1px dashed black',
    }}>
      {children}
    </div>
  )
}

export default PasDeRésultats
