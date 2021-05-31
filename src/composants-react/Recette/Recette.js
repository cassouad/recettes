import React from 'react'

import CarteBouton from '../CarteBouton'
import CarteAvecTitreBouton from '../CarteAvecTitreBouton'
import RésultatDUneRecherche from '../RésultatDUneRecherche'
import TableauDesIngredientsDeLaRecette from './TableauDesIngredientsDeLaRecette'
import TableauDesInstructionsDeLaRecette from './TableauDesInstructionsDeLaRecette'
import TableauDeTagsDeLaRecette from './TableauDeTagsDeLaRecette'
import AuteurDeLaRecette from './AuteurDeLaRecette'
import ImagesDeLaRecette from './ImagesDeLaRecette'

const Recette = ({
  recette,
  demandeDeRecherche,
  couleurPrincipale,
  couleurDeArrièrePlan,
  stickyTopPourLeTitreDesRecettes,
}) => {
  const [laRecetteEstOuverte, setLaRecetteEstOuverte] = React.useState(false)
  const élémentDuTitreDeLaRecette = (
    <RésultatDUneRecherche
      résultat={recette.titre}
      demandeDeRecherche={demandeDeRecherche}
    />
  )

  if (laRecetteEstOuverte) {
    return (
      <CarteAvecTitreBouton
        élémentDuTitre={élémentDuTitreDeLaRecette}
        quandOnCliqueFaire={() => setLaRecetteEstOuverte(false)}
        couleurPrincipale={couleurPrincipale}
        couleurDeArrièrePlan={couleurDeArrièrePlan}
        stickyTopPourLeTitre={stickyTopPourLeTitreDesRecettes}
      >
        <div style={{
          paddingBottom: '10px',
        }}>
          <TableauDeTagsDeLaRecette
            tableauDeTags={recette.tableauDeTags}
          />
        </div>
        <div style={{
          paddingBottom: '10px',
        }}>
          <ImagesDeLaRecette
            cheminLocalVersImage={recette.cheminLocalVersImage}
          />
        </div>
        <div style={{
          paddingBottom: '10px',
        }}>
          <TableauDesIngredientsDeLaRecette
            tableauIngredients={recette.tableauIngredients}
            pour={recette.pour}
          />
        </div>
        <TableauDesInstructionsDeLaRecette
          tableauInstructions={recette.tableauInstructions}
        />
        <AuteurDeLaRecette
          auteur={recette.auteur}
          paddingTop={'10px'}
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
