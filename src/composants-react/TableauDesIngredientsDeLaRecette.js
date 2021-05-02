import React from 'react'

const TableauDesIngredientsDeLaRecette = ({
  tableauIngredients,
}) => {
  return (
    <table style={{
      borderSpacing: '0px',
      width: '100%',
      padding: '12px',
      borderRadius: '10px',
      color: '#353535',
      backgroundColor: '#efefef',
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
  )
}

export default TableauDesIngredientsDeLaRecette
