import React from 'react'

import Recette from './Recette'
import Recherche from '../modules/recherche'

const TableauDeRecettes = ({
  tableauDeRecettes,
  demandeDeRecherche,
  tagAvecLeQuelOnFiltre,
  couleurPrincipale,
  couleurDeArrièrePlan,
  stickyTopPourLeTitreDesRecettes,
}) => {
  const tableauDeRecettesFiltrées = filtreTableauDeRecettes({
    tableauDeRecettes,
    demandeDeRecherche,
    tagAvecLeQuelOnFiltre,
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
    </div>
  )
}

export default TableauDeRecettes

const filtreTableauDeRecettes = ({
  tableauDeRecettes,
  demandeDeRecherche,
  tagAvecLeQuelOnFiltre,
}) => {
  return tableauDeRecettes.filter((recette) => {
    const leTitreCorrespondÀLaDemande =
      Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
        demande: demandeDeRecherche,
        chaîne: recette.titre,
      })
    
    const leTableauDeTagsInclueLeTagAvecLeQuelOnFiltre = (
      tagAvecLeQuelOnFiltre === '' ||
      recette.tableauDeTags?.includes(tagAvecLeQuelOnFiltre)
    )

    return (
      leTitreCorrespondÀLaDemande &&
      leTableauDeTagsInclueLeTagAvecLeQuelOnFiltre
    )
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
