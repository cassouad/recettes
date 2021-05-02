import React from 'react'

const Bouton = ({
  quandOnCliqueFaire=() => {},
  children,
  styleQuandLaSourisEstAuDessus,
  style,
}) => {
  const [laSourisEstAuDessus, setLaSourisEstAuDessus] = React.useState(false)

  let styleFinal
  if (laSourisEstAuDessus && styleQuandLaSourisEstAuDessus) {
    styleFinal = styleQuandLaSourisEstAuDessus
  } else {
    styleFinal = style
  }

  return (
    <button
      style={{
        width: '100%',
        padding: 0,
        margin: 0,
        border: 'none',
        cursor: 'pointer',
        textAlign: 'inherit',
        outline: 'none',
        ...styleFinal,
      }}
      onClick={quandOnCliqueFaire}
      onMouseEnter={() => setLaSourisEstAuDessus(true)}
      onMouseLeave={() => setLaSourisEstAuDessus(false)}
      onFocus={() => setLaSourisEstAuDessus(true)}
      onBlur={() => setLaSourisEstAuDessus(false)}
    >
      {children}
    </button>
  )
}

export default Bouton
