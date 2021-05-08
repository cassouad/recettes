import React from 'react'

import recettes from '../recettes'
import ArrièrePlan from './ArrièrePlan'
import ChampDeRechercheDeRecette from './ChampDeRechercheDeRecette'
import TitrePrincipal from './TitrePrincipal'
import TableauDeRecettes from './TableauDeRecettes'
import TableauDeTousLesTagsDesRecettes from './TableauDeTousLesTagsDesRecettes'
import TagAvecLeQuelOnFiltre from './TagAvecLeQuelOnFiltre'
import TableauDeTagsAvecLesQuelsOnFiltre from './TableauDeTagsAvecLesQuelsOnFiltre'

const App = () => {
  const [demandeDeRecherche, setDemandeDeRecherche] = React.useState('')
  const [
    tableauDeTagsAvecLesQuelsOnFiltre,
    setTableauDeTagsAvecLesQuelsOnFiltre,
  ] = React.useState([])

  const quandOnCliqueSurUnTagFaire = ({tag}) => {
    setTableauDeTagsAvecLesQuelsOnFiltre([
      ...tableauDeTagsAvecLesQuelsOnFiltre,
      tag,
    ])
    setDemandeDeRecherche('')
    window.scrollTo(0, 0)
  }
  const quandOnCliqueSurUnTagAvecLeQuelOnFiltre = ({tag}) => {
    setTableauDeTagsAvecLesQuelsOnFiltre(
      tableauDeTagsAvecLesQuelsOnFiltre.filter(tagCourant => tagCourant !== tag)
    )
  }

  const padding = '10px'
  const couleurDeArrièrePlan = '#e6eef7'
  const couleurPrincipale = 'hsl(210deg 53% 59%)'

  const {
    doitAfficherLeTableauDesRecettes,
    doitAfficherLeTableauDeTousLesTags,
    doitAfficherLeTagAvecLeQuelOnFiltre,
  } = calculeLesDoitAfficher({
    demandeDeRecherche,
    tableauDeTagsAvecLesQuelsOnFiltre,
  })

  const tableauDeRecettes = filtreTableauDeRecettes({
    tableauDeRecettes: recettes,
    tableauDeTagsAvecLesQuelsOnFiltre,
  })

  return (
    <ArrièrePlan
      couleur={couleurDeArrièrePlan}
    >
      <div style={{
        backgroundColor: couleurDeArrièrePlan,
        position: 'sticky',
        top: 0,
        padding: '20px 20px 0px 20px',
        zIndex: 2,
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
        {doitAfficherLeTagAvecLeQuelOnFiltre && <div style={{
          paddingBottom: padding,
        }}>
          <TableauDeTagsAvecLesQuelsOnFiltre
            tableauDeTagsAvecLesQuelsOnFiltre={tableauDeTagsAvecLesQuelsOnFiltre}
            quandOnCliqueSurUnTagAvecLeQuelOnFiltre={quandOnCliqueSurUnTagAvecLeQuelOnFiltre}
          />
        </div>}
      </div>
      <div style={{
        padding: '0px 20px 20px 20px'
      }}>
        {doitAfficherLeTableauDesRecettes && <TableauDeRecettes
          tableauDeRecettes={tableauDeRecettes}
          demandeDeRecherche={demandeDeRecherche}
          tableauDeTagsAvecLesQuelsOnFiltre={tableauDeTagsAvecLesQuelsOnFiltre}
          couleurPrincipale={couleurPrincipale}
          couleurDeArrièrePlan={couleurDeArrièrePlan}
          stickyTopPourLeTitreDesRecettes={'121px'}
        />}
        {doitAfficherLeTableauDeTousLesTags && <TableauDeTousLesTagsDesRecettes
          tableauDeRecettes={tableauDeRecettes}
          demandeDeRecherche={demandeDeRecherche}
          tableauDeTagsAvecLesQuelsOnFiltre={tableauDeTagsAvecLesQuelsOnFiltre}
          couleurPrincipale={couleurPrincipale}
          quandOnCliqueSurUnTagFaire={quandOnCliqueSurUnTagFaire}
        />}
      </div>
    </ArrièrePlan>
  )
}

export default App

const calculeLesDoitAfficher = ({
  demandeDeRecherche,
  tableauDeTagsAvecLesQuelsOnFiltre,
}) => {
  let doitAfficherLeTableauDesRecettes
  let doitAfficherLeTableauDeTousLesTags
  if (demandeDeRecherche[0] === '#') {
    doitAfficherLeTableauDesRecettes = false
    doitAfficherLeTableauDeTousLesTags = true
  } else {
    doitAfficherLeTableauDesRecettes = true
    doitAfficherLeTableauDeTousLesTags = false
  }

  const doitAfficherLeTagAvecLeQuelOnFiltre = tableauDeTagsAvecLesQuelsOnFiltre[0] !== undefined

  return {
    doitAfficherLeTableauDeTousLesTags,
    doitAfficherLeTableauDesRecettes,
    doitAfficherLeTagAvecLeQuelOnFiltre,
  }
}

const filtreTableauDeRecettes = ({
  tableauDeRecettes,
  tableauDeTagsAvecLesQuelsOnFiltre,
}) => {
  return tableauDeRecettes.filter((recette) => {
    return tableauDeTagsAvecLesQuelsOnFiltre.reduce((acc, tag) => {
      return acc && recette.tableauDeTags.includes(tag)
    }, true)    
  })
}
