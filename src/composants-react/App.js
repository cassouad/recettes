import React from 'react'

import recettes from '../recettes'
import ArrièrePlan from './ArrièrePlan'
import ChampDeRechercheDeRecette from './ChampDeRechercheDeRecette'
import TitrePrincipal from './TitrePrincipal'
import TableauDeRecettes from './TableauDeRecettes'
import TableauDeTousLesTagsDesRecettes from './TableauDeTousLesTagsDesRecettes'
import TagAvecLeQuelOnFiltre from './TagAvecLeQuelOnFiltre'

const App = () => {
  const [demandeDeRecherche, setDemandeDeRecherche] = React.useState('')
  const [
    tagAvecLeQuelOnFiltre,
    setTagAvecLeQuelOnFiltre,
  ] = React.useState('')

  const quandOnCliqueSurUnTagFaire = ({tag}) => {
    setTagAvecLeQuelOnFiltre(tag)
    setDemandeDeRecherche('')
    window.scrollTo(0, 0)
  }
  const quandOnCliqueSurLeTagAvecLeQuelOnFiltre = () => {
    setTagAvecLeQuelOnFiltre('')
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
    tagAvecLeQuelOnFiltre,
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
          <TagAvecLeQuelOnFiltre
            tag={tagAvecLeQuelOnFiltre}
            quandOnCliqueFaire={quandOnCliqueSurLeTagAvecLeQuelOnFiltre}
          />
        </div>}
      </div>
      <div style={{
        padding: '0px 20px 20px 20px'
      }}>
        {doitAfficherLeTableauDesRecettes && <TableauDeRecettes
          tableauDeRecettes={recettes}
          demandeDeRecherche={demandeDeRecherche}
          tagAvecLeQuelOnFiltre={tagAvecLeQuelOnFiltre}
          couleurPrincipale={couleurPrincipale}
          couleurDeArrièrePlan={couleurDeArrièrePlan}
          stickyTopPourLeTitreDesRecettes={'121px'}
        />}
        {doitAfficherLeTableauDeTousLesTags && <TableauDeTousLesTagsDesRecettes
          tableauDeRecettes={recettes}
          demandeDeRecherche={demandeDeRecherche}
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
  tagAvecLeQuelOnFiltre,
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

  const doitAfficherLeTagAvecLeQuelOnFiltre = tagAvecLeQuelOnFiltre !== ''

  return {
    doitAfficherLeTableauDeTousLesTags,
    doitAfficherLeTableauDesRecettes,
    doitAfficherLeTagAvecLeQuelOnFiltre,
  }
}
