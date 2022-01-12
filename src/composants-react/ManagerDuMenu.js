import React from 'react'
import Bouton from './Bouton'


const ManagerDuMenu = ({
  children,
  couleurPrincipale,
}) => {
  const quandOnCliqueSurMenuFaire = () => {
    console.log(quandOnCliqueSurMenuFaire)
    quandOnCliqueSurMenuFaire.styleQuandLaSourisEstAuDessus('submit', () =>{
      alert('Merci')
    }, false)
  }
  

  return (
    <div>
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 3,
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          textAlign: 'right',
          padding: '20px 20px 0px',
        }}>
          <BoutonDuMenu
            quandOnCliqueFaire={quandOnCliqueSurMenuFaire}
            couleurPrincipale={couleurPrincipale}
          />
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ManagerDuMenu

const BoutonDuMenu = ({
  quandOnCliqueFaire,
  couleurPrincipale,
}) => {
  const styleCommun = {
    width: 'initial',
    transition: 'all 0.1s ease-out 0s',
    borderRadius: '10px',
    padding: '9px',
  }

  return (
    <Bouton
      quandOnCliqueFaire={quandOnCliqueFaire}
      style={{
        ...styleCommun,
        backgroundColor: 'white',
      }}
      styleQuandLaSourisEstAuDessus={{
        ...styleCommun,
        backgroundColor: couleurPrincipale,
        color: 'white',
      }}
    >
      Menu
    </Bouton>
  )
}
