import React from 'react'

const TableauDeTagsDeLaRecette = ({
  tableauDeTags,
}) => {
  return (
    <div>
      {tableauDeTags?.map((tag, index) => {
        return (
          <span key={index} style={{
            color: '#7d7d7d',
            fontStyle: 'italic',
            paddingRight: '10px',
          }}>
            {`#${tag}`}
          </span>
        )
      }) ?? []}
    </div>
  )
}

export default TableauDeTagsDeLaRecette
