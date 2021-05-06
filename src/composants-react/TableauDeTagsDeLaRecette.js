import React from 'react'

const TableauDeTagsDeLaRecette = ({
  tableauDeTags,
}) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      {tableauDeTags?.map((tag, index) => {
        let paddingRight
        if (index !== tableauDeTags.length - 1) {
          paddingRight = '10px'
        }

        return (
          <div key={index} style={{
            color: '#7d7d7d',
            fontStyle: 'italic',
            paddingRight,
          }}>
            {`#${tag}`}
          </div>
        )
      }) ?? []}
    </div>
  )
}

export default TableauDeTagsDeLaRecette
