import React from 'react'

import recettes from '../recettes'
import TableauDeRecettes from './TableauDeRecettes'

const App = () => {
  return (
    <div>
      <div>
        Titre
      </div>
      <TableauDeRecettes
        tableauDeRecettes={recettes}
      />
    </div>
  )
}

export default App
