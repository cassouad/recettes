import React from 'react'

import Recette from './Recette'
import Recherche from '../modules/recherche'
import PasDeRésultats from './PasDeRésultats'

const TableauDeRecettes = ({
  tableauDeRecettes,
  demandeDeRecherche,
  couleurPrincipale,
  couleurDeArrièrePlan,
  stickyTopPourLeTitreDesRecettes,
}) => {
  const tableauDeRecettesFiltrées = filtreTableauDeRecettes({
    tableauDeRecettes,
    demandeDeRecherche,
  })
  const tableauDeRecettesTriées = trieTableauDeRecettes({
    tableauDeRecettes: tableauDeRecettesFiltrées,
  })
  const tableauDElements = calculesTableauDElements({
    tableauDeRecettes: tableauDeRecettesTriées,
    demandeDeRecherche,
    couleurPrincipale,
    couleurDeArrièrePlan,
    stickyTopPourLeTitreDesRecettes,
  })

  return (
    <div>
      {tableauDElements}
      {tableauDElements.length === 0 &&
        <PasDeRésultats>
          Aucune recette ne correspond à votre recherche.
        </PasDeRésultats>
      }
    </div>
  )
}

export default TableauDeRecettes

const filtreTableauDeRecettes = ({
  tableauDeRecettes,
  demandeDeRecherche,
}) => {
  return tableauDeRecettes.filter((recette) => {
    return Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
      demande: demandeDeRecherche,
      chaîne: recette.titre,
    })
  })
}

const trieTableauDeRecettes = ({tableauDeRecettes}) => {
  const copieDuTableauDeRecettes = [...tableauDeRecettes]
  const compareDeuxRecettes = (premièreRecette, secondeRecette) => {
    const premierTitre = premièreRecette.titre
    const secondTitre = secondeRecette.titre

    return premierTitre.localeCompare(secondTitre)
  }

  return copieDuTableauDeRecettes.sort(compareDeuxRecettes)
}

const calculesTableauDElements = ({
  tableauDeRecettes,
  demandeDeRecherche,
  couleurPrincipale,
  couleurDeArrièrePlan,
  stickyTopPourLeTitreDesRecettes,
}) => {
  return tableauDeRecettes.map((recette, index) => {
    let paddingBottom
    if (index === tableauDeRecettes.length - 1) {
      paddingBottom = '0px'
    } else {
      paddingBottom = '10px'
    }

    return (
      <div key={recette.titre} style={{paddingBottom}}>
        <Recette
          recette={recette}
          demandeDeRecherche={demandeDeRecherche}
          couleurPrincipale={couleurPrincipale}
          couleurDeArrièrePlan={couleurDeArrièrePlan}
          stickyTopPourLeTitreDesRecettes={stickyTopPourLeTitreDesRecettes}
        />
      </div>
    )
  })
}
