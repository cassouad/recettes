import React from 'react'
import Bouton from './Bouton'

const CarteAvecTitreBouton = ({
  children,
  élémentDuTitre,
  quandOnCliqueFaire,
  couleurPrincipale,
  couleurDeArrièrePlan,
  stickyTopPourLeTitre,
}) => {
  const styleDuBouton = {
    position: 'relative',
    transition: 'all 0.1s ease-out 0s',
    padding: '12px',
    borderRadius: '10px 10px 0px 0px',
    backgroundColor: couleurPrincipale,
    color: 'white',
  }

  return (
    <React.Fragment>
      <div style={{
        position: 'sticky',
        top: stickyTopPourLeTitre,        
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          background: couleurDeArrièrePlan,
        }}/>
        <Bouton
          style={styleDuBouton}
          styleQuandLaSourisEstAuDessus={styleDuBouton}
          quandOnCliqueFaire={quandOnCliqueFaire}
        >
          {élémentDuTitre}
        </Bouton>
      </div>
      <div style={{
        padding: '12px',
        borderRadius: '0px 0px 10px 10px',    
        backgroundColor: 'white',    
      }}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default CarteAvecTitreBouton
