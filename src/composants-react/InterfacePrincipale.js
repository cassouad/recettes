import React from 'react'

import ChampDeRechercheDeRecette from './ChampDeRechercheDeRecette'
import TitrePrincipal from './TitrePrincipal'
import TableauDeRecettes from './TableauDeRecettes'
import TableauDeTousLesTagsDesRecettes from './TableauDeTousLesTagsDesRecettes'
import TableauDeTagsAvecLesQuelsOnFiltre from './TableauDeTagsAvecLesQuelsOnFiltre'
import Commande from './Commande'

const InterfacePrincipale = ({
  couleurDeArrièrePlan,
  couleurPrincipale,

  padding,

  demandeDeRecherche,
  setDemandeDeRecherche,

  enregistrerDesActions,

  doitAfficherLeTagAvecLeQuelOnFiltre,
  tableauDeTagsAvecLesQuelsOnFiltre,
  quandOnCliqueSurUnTagAvecLeQuelOnFiltre,

  doitAfficherLaCommande,
  quandOnCliqueSurLaCommandeFiltrerParTag,

  doitAfficherLeTableauDesRecettes,
  tableauDeRecettes,

  doitAfficherLeTableauDeTousLesTags,
  quandOnCliqueSurUnTagFaire,
}) => {
  return (
    <div>
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
            enregistrerDesActions={enregistrerDesActions}
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
        {doitAfficherLaCommande && <div style={{
          paddingBottom: padding,
        }}>
          <Commande
            nom='Filtrer par tag'
            commande={quandOnCliqueSurLaCommandeFiltrerParTag}
          />
        </div>}
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
    </div>
  )
}

export default InterfacePrincipale
