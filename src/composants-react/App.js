import React from 'react'

import recettes from '../recettes'
import ArrièrePlan from './ArrièrePlan'
import InterfacePrincipale from './InterfacePrincipale'
import ManagerDuMenu from './ManagerDuMenu'

const App = () => {
  const [demandeDeRecherche, setDemandeDeRecherche] = React.useState('')
  const [actionsDuChampDeRecherche, setActionsDuChampDeRecherche] = React.useState({})
  const enregistrerDesActions = React.useCallback((actions) => {
    setActionsDuChampDeRecherche(actions)
  }, [])
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
    actionsDuChampDeRecherche.focusLeChamp()
  }
  const quandOnCliqueSurUnTagAvecLeQuelOnFiltre = ({tag}) => {
    setTableauDeTagsAvecLesQuelsOnFiltre(
      tableauDeTagsAvecLesQuelsOnFiltre.filter(tagCourant => tagCourant !== tag)
    )
  }
  const quandOnCliqueSurLaCommandeFiltrerParTag = () => {
    setDemandeDeRecherche('#')
    actionsDuChampDeRecherche.focusLeChamp()
  }

  const padding = '10px'
  const couleurDeArrièrePlan = '#e6eef7'
  const couleurPrincipale = 'hsl(210deg 53% 59%)'

  const {
    doitAfficherLeTableauDesRecettes,
    doitAfficherLeTableauDeTousLesTags,
    doitAfficherLeTagAvecLeQuelOnFiltre,
    doitAfficherLaCommande,
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
      <ManagerDuMenu
        couleurPrincipale={couleurPrincipale}
      >
        <InterfacePrincipale
          couleurDeArrièrePlan={couleurDeArrièrePlan}
          couleurPrincipale={couleurPrincipale}
      
          padding={padding}
      
          demandeDeRecherche={demandeDeRecherche}
          setDemandeDeRecherche={setDemandeDeRecherche}
      
          enregistrerDesActions={enregistrerDesActions}
      
          doitAfficherLeTagAvecLeQuelOnFiltre={doitAfficherLeTagAvecLeQuelOnFiltre}
          tableauDeTagsAvecLesQuelsOnFiltre={tableauDeTagsAvecLesQuelsOnFiltre}
          quandOnCliqueSurUnTagAvecLeQuelOnFiltre={quandOnCliqueSurUnTagAvecLeQuelOnFiltre}
      
          doitAfficherLaCommande={doitAfficherLaCommande}
          quandOnCliqueSurLaCommandeFiltrerParTag={quandOnCliqueSurLaCommandeFiltrerParTag}
      
          doitAfficherLeTableauDesRecettes={doitAfficherLeTableauDesRecettes}
          tableauDeRecettes={tableauDeRecettes}
      
          doitAfficherLeTableauDeTousLesTags={doitAfficherLeTableauDeTousLesTags}
          quandOnCliqueSurUnTagFaire={quandOnCliqueSurUnTagFaire}
        />
      </ManagerDuMenu>
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

  const doitAfficherLaCommande = demandeDeRecherche === ''

  return {
    doitAfficherLeTableauDeTousLesTags,
    doitAfficherLeTableauDesRecettes,
    doitAfficherLeTagAvecLeQuelOnFiltre,
    doitAfficherLaCommande,
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
