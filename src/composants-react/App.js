import React from 'react'

import recettes from '../recettes'
import ArrièrePlan from './ArrièrePlan'
import ChampDeRechercheDeRecette from './ChampDeRechercheDeRecette'
import TitrePrincipal from './TitrePrincipal'
import TableauDeRecettes from './TableauDeRecettes'

const App = () => {
  const [demandeDeRecherche, setDemandeDeRecherche] = React.useState('')

  const padding = '10px'
  const couleurDeArrièrePlan = '#e6eef7'
  const couleurPrincipale = 'hsl(210deg 53% 59%)'

  return (
    <ArrièrePlan
      couleur={couleurDeArrièrePlan}
    >
      <div style={{
        backgroundColor: couleurDeArrièrePlan,
        position: 'sticky',
        top: 0,
        padding: '20px 20px 0px 20px',
      }}>
        <div style={{
          paddingBottom: padding,
        }}>
          <TitrePrincipal />
        </div>
        <div style={{
          paddingBottom: padding,
        }}>
          <ChampDeRechercheDeRecette
            demandeDeRecherche={demandeDeRecherche}
            setDemandeDeRecherche={setDemandeDeRecherche}
          />
        </div>
      </div>
      <div style={{
        padding: '0px 20px 20px 20px'
      }}>
        <TableauDeRecettes
          tableauDeRecettes={recettes}
          demandeDeRecherche={demandeDeRecherche}
          couleurPrincipale={couleurPrincipale}
          stickyTopPourLeTitreDesRecettes={'121px'}
        />
      </div>
    </ArrièrePlan>
  )
}

export default App
