import React from 'react'

import Carte from './Carte'

const Recette = ({
  recette,
}) => {
  return (
    <Carte>
      <div>
        {recette.titre}
      </div>
    </Carte>
  )
}

export default Recette
