import React from 'react'

import Bouton from './Bouton'

const TagAvecLeQuelOnFiltre = ({
  tag,
  quandOnCliqueFaire,
}) => {
  const styleCommun = {
    background: 'hsl(210deg 38% 59%)',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    width: 'fit-content',
  }

  return (
    <Bouton
      style={styleCommun}
      styleQuandLaSourisEstAuDessus={{
        ...styleCommun,
        background: 'hsl(210deg 69% 59%)',
      }}
      quandOnCliqueFaire={quandOnCliqueFaire}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
      }}>
        <div>
          {`#${tag}`}
        </div>
        <div style={{
          paddingLeft: '10px',
          fontSize: '10px',
        }}>
          {'╳'}
        </div>
      </div>
    </Bouton>
  )
}

export default TagAvecLeQuelOnFiltre
