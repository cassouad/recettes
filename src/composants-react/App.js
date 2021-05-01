import React from 'react'

import recettes from '../recettes'
import ArrièrePlan from './ArrièrePlan'
import ChampDeRechercheDeRecette from './ChampDeRechercheDeRecette'
import TitrePrincipal from './TitrePrincipal'
import TableauDeRecettes from './TableauDeRecettes'

const App = () => {
  const [demandeDeRecherche, setDemandeDeRecherche] = React.useState('')

  const padding = '10px'

  return (
    <ArrièrePlan>
      <div style={{
        paddingBottom: padding,
      }}>
        <TitrePrincipal/>
      </div>
      <div style={{
        paddingBottom: padding,
      }}>
        <ChampDeRechercheDeRecette
          demandeDeRecherche={demandeDeRecherche}
          setDemandeDeRecherche={setDemandeDeRecherche}
        />
      </div>
      <TableauDeRecettes
        tableauDeRecettes={recettes}
        demandeDeRecherche={demandeDeRecherche}
      />
    </ArrièrePlan>
  )
}

export default App
