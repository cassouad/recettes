import React from 'react'

const TableauDesInstructionsDeLaRecette = ({
  tableauInstructions,
}) => {
  const tableauÉléments = tableauInstructions?.map((instruction, index) => {
    return (
      <div key={index} style={{
        display: 'flex',
      }}>
        <div style={{
          paddingRight: '10px',
        }}>
          {'•'}
        </div>
        <div>
          {instruction}
        </div>
      </div>
    )
  }) ?? []

  return (
    <div>
      {tableauÉléments}
    </div>
  )
}

export default TableauDesInstructionsDeLaRecette
