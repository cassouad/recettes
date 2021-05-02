import React from 'react'

const TableauDesIngredientsDeLaRecette = ({
  tableauIngredients,
  pour,
}) => {
  let élémentDePour
  if (pour?.quantité) {
    élémentDePour = (
      <div style={{
        fontWeight: 600,
        paddingBottom: '6px',
      }}>
        {`Pour ${pour?.quantité} ${pour?.quiOuQuoi} :`}
      </div>
    )
  } else {
    élémentDePour = <div/>
  }

  return (
    <div style={{
      padding: '12px',
      borderRadius: '10px',
      color: '#353535',
      backgroundColor: '#efefef',
    }}>
      <div>
        {élémentDePour}
      </div>
      <table style={{
        borderSpacing: '0px',
        width: '100%',
      }}>
        <tbody>
          {tableauIngredients?.map(({ nom, quantité, unité }) => {
            let quantitéEtUnité
            let textAlign = 'left'
            if (quantité && unité) {
              quantitéEtUnité = `${quantité} ${unité}`
            } else if (quantité) {
              quantitéEtUnité = quantité
            } else {
              quantitéEtUnité = '-'
              textAlign = 'center'
            }

            return (
              <tr key={nom}>
                <td style={{
                  verticalAlign: 'baseline',
                  whiteSpace: 'nowrap',
                  textAlign,
                }}>
                  {quantitéEtUnité}
                </td>
                <td>
                  {nom}
                </td>
              </tr>
            )
          }) ?? []}
        </tbody>
      </table>
    </div>
  )
}

export default TableauDesIngredientsDeLaRecette
