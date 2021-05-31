import React from 'react'

const ImagesDeLaRecette = ({
  cheminLocalVersImage,
})=> {
  if (cheminLocalVersImage) {
    return (
      <div style={{
        textAlign: 'center',
      }}>
        <img src={cheminLocalVersImage} style={{
          width: '100%',
          borderRadius: '10px',
        }}/>
      </div>
    )
  } else {
    return <div/>
  }
}

export default ImagesDeLaRecette
