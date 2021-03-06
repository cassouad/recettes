import React from 'react'

import CarteBouton from './CarteBouton'
import Recherche from '../modules/recherche'
import RésultatDUneRecherche from './RésultatDUneRecherche'
import PasDeRésultats from './PasDeRésultats'

const TableauDeTousLesTagsDesRecettes = ({
  tableauDeRecettes,
  demandeDeRecherche,
  tableauDeTagsAvecLesQuelsOnFiltre,
  couleurPrincipale,
  quandOnCliqueSurUnTagFaire,
}) => {
  let tableauDInfosSurUnTag = transformeDesRecettesEnInfosSurUnTag({
    tableauDeRecettes,
  })

  tableauDInfosSurUnTag = filtreTableauDInfosSurUnTag({
    tableauDInfosSurUnTag,
    demandeDeRecherche,
    tableauDeTagsAvecLesQuelsOnFiltre,
  })

  tableauDInfosSurUnTag = trieTableauDInfosSurUnTag({
    tableauDInfosSurUnTag,
  })

  const tableauDElements = calculeTableauDElements({
    tableauDInfosSurUnTag,
    couleurPrincipale,
    demandeDeRecherche,
    quandOnCliqueSurUnTagFaire,  
  })

  return (
    <div>
      {tableauDElements}
      {tableauDElements.length === 0 &&
        <PasDeRésultats>
          Aucun tag ne correspond à votre recherche.  
        </PasDeRésultats>
      }
    </div>
  )
}

export default TableauDeTousLesTagsDesRecettes

const transformeDesRecettesEnInfosSurUnTag = ({ tableauDeRecettes }) => {
  return Object.values(tableauDeRecettes.reduce((acc, recette) => {
    recette.tableauDeTags?.forEach((tag) => {
      if (acc[tag]) {
        acc[tag].nombreDeRecettes = acc[tag].nombreDeRecettes + 1
      } else {
        acc[tag] = {
          tagSansDièse: tag,
          tagAvecDièse: `#${tag}`,
          nombreDeRecettes: 1,
        }
      }
    })
    return acc
  }, {}))
}

const filtreTableauDInfosSurUnTag = ({
  tableauDInfosSurUnTag,
  demandeDeRecherche,
  tableauDeTagsAvecLesQuelsOnFiltre,
}) => {
  return tableauDInfosSurUnTag.filter((infoSurUnTag) => {
    return (
      Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
        demande: demandeDeRecherche,
        chaîne: infoSurUnTag.tagAvecDièse,
      }) &&
      tableauDeTagsAvecLesQuelsOnFiltre.includes(infoSurUnTag.tagSansDièse) === false
    )
  })
}

const trieTableauDInfosSurUnTag = ({ tableauDInfosSurUnTag }) => {
  const copieDuTableauDInfosSurUnTag = [...tableauDInfosSurUnTag]
  const compareDeuxInfosSurUnTag = (premièreInfoSurUnTag, secondeInfoSurUnTag) => {
    return premièreInfoSurUnTag.tagAvecDièse.localeCompare(
      secondeInfoSurUnTag.tagAvecDièse
    )
  }

  return copieDuTableauDInfosSurUnTag.sort(compareDeuxInfosSurUnTag)
}

const calculeTableauDElements = ({
  tableauDInfosSurUnTag,
  couleurPrincipale,
  demandeDeRecherche,
  quandOnCliqueSurUnTagFaire,
}) => {
  return (
    tableauDInfosSurUnTag.map((infoSurUnTag, index) => {
      let paddingBottom
      if (index === tableauDInfosSurUnTag.length - 1) {
        paddingBottom = '0px'
      } else {
        paddingBottom = '10px'
      }

      return (
        <div key={infoSurUnTag.tagAvecDièse} style={{
          paddingBottom,
        }}>
          <Tag
            infoSurUnTag={infoSurUnTag}
            couleurPrincipale={couleurPrincipale}
            demandeDeRecherche={demandeDeRecherche}
            quandOnCliqueFaire={quandOnCliqueSurUnTagFaire}
          />
        </div>
      )
    })
  )
}

const Tag = ({
  infoSurUnTag,
  couleurPrincipale,
  demandeDeRecherche,
  quandOnCliqueFaire,
}) => {
  return (
    <CarteBouton
      quandOnCliqueFaire={() => {
        quandOnCliqueFaire({tag: infoSurUnTag.tagSansDièse})
      }}
      couleurPrincipale={couleurPrincipale}
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
      }}>
        <RésultatDUneRecherche
          résultat={infoSurUnTag.tagAvecDièse}
          demandeDeRecherche={demandeDeRecherche}
        />
        <div style={{
          paddingLeft: '10px',
          color: '#656565',
          fontSize: '13px',
        }}>
          {`${infoSurUnTag.nombreDeRecettes} recette(s)`}
        </div>
      </div>
    </CarteBouton>
  )
}
