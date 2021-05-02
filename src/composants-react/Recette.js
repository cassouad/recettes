import React from 'react'

import CarteBouton from './CarteBouton'
import CarteAvecTitreBouton from './CarteAvecTitreBouton'
import TitreDeLaRecette from './TitreDeLaRecette'
import TableauDesIngredientsDeLaRecette from './TableauDesIngredientsDeLaRecette'
import TableauDesInstructionsDeLaRecette from './TableauDesInstructionsDeLaRecette'

const Recette = ({
  recette,
  demandeDeRecherche,
  couleurPrincipale,
  stickyTopPourLeTitreDesRecettes,
}) => {
  const [laRecetteEstOuverte, setLaRecetteEstOuverte] = React.useState(false)
  const élémentDuTitreDeLaRecette = (
    <TitreDeLaRecette
      titre={recette.titre}
      demandeDeRecherche={demandeDeRecherche}
    />
  )

  if (laRecetteEstOuverte) {
    return (
      <CarteAvecTitreBouton
        élémentDuTitre={élémentDuTitreDeLaRecette}
        quandOnCliqueFaire={() => setLaRecetteEstOuverte(false)}
        couleurPrincipale={couleurPrincipale}
        stickyTopPourLeTitre={stickyTopPourLeTitreDesRecettes}
      >
        <div style={{
          paddingBottom: '10px',
        }}>
          <TableauDesIngredientsDeLaRecette
            tableauIngredients={recette.tableauIngredients}
          />
        </div>
        <TableauDesInstructionsDeLaRecette
          tableauInstructions={recette.tableauInstructions}
        />
      </CarteAvecTitreBouton>
    )
  } else {
    return (
      <CarteBouton
        quandOnCliqueFaire={() => setLaRecetteEstOuverte(true)}
        couleurPrincipale={couleurPrincipale}
      >
        {élémentDuTitreDeLaRecette}
      </CarteBouton>
    )
  }
}

export default Recette
