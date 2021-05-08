import React from 'react'

import TagAvecLeQuelOnFiltre from './TagAvecLeQuelOnFiltre'

const TableauDeTagsAvecLesQuelsOnFiltre = ({
  tableauDeTagsAvecLesQuelsOnFiltre,
  quandOnCliqueSurUnTagAvecLeQuelOnFiltre,
}) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      margin: '-5px',
    }}>
      {tableauDeTagsAvecLesQuelsOnFiltre.map(tag => {
        return (
          <div key={tag} style={{
            padding: '5px',
          }}>
            <TagAvecLeQuelOnFiltre
              tag={tag}
              quandOnCliqueFaire={() => {
                quandOnCliqueSurUnTagAvecLeQuelOnFiltre({
                  tag,
                })
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default TableauDeTagsAvecLesQuelsOnFiltre
