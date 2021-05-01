import React from 'react'

import Recette from './Recette'

////// quand on clique sur une recette, elle s'ouvre et prend toute la place
const TableauDeRecettes = ({
  tableauDeRecettes,
  demandeDeRecherche,
}) => {
  const tableauDeRecettesFiltrées = filtreTableauDeRecettes(
    tableauDeRecettes,
    demandeDeRecherche
  )
  const tableauDeRecettesTriées = trieTableauDeRecettes(tableauDeRecettesFiltrées)
  const tableauDElements = calculesTableauDElements(
    tableauDeRecettesTriées,
    demandeDeRecherche
  )

  return (
    <div>
      {tableauDElements}
    </div>
  )
}

export default TableauDeRecettes

const filtreTableauDeRecettes = (tableauDeRecettes, demandeDeRecherche) => {
  demandeDeRecherche = demandeDeRecherche
    .toLocaleLowerCase()
    .replace(/\s+/g, ' ')
    .split('')
    .join('.*?')
  return tableauDeRecettes.filter((recette) => {
    return recette.titre.toLocaleLowerCase().match(demandeDeRecherche) !== null
  })
}

const trieTableauDeRecettes = (tableauDeRecettes) => {
  const copieDuTableauDeRecettes = [...tableauDeRecettes]
  const compareDeuxRecettes = (premièreRecette, secondeRecette) => {
    const premierTitre = premièreRecette.titre
    const secondTitre = secondeRecette.titre

    return premierTitre.localeCompare(secondTitre)
  }

  return copieDuTableauDeRecettes.sort(compareDeuxRecettes)
}

const calculesTableauDElements = (tableauDeRecettes, demandeDeRecherche) => {
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
        />
      </div>
    )
  })
}
