const formateLaDemande = ({demande}) =>
  demande
    .toLocaleLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[âà]/g, 'a')
    .replace(/[éèê]/g, 'e')
    .replace(/[.+*?^$()[\]{}|\\]/g, '')

const estCeQueLaChaîneCorrespondÀLaDemande = ({
  chaîne,
  demande,
}) => {
  demande = formateLaDemande({
    demande,
  })
  demande = demande.split('').join('.*?')
  chaîne = formateLaDemande({
    demande: chaîne,
  })

  return chaîne.match(demande) !== null
}

const coupeLaChaîneAvecLaLettre = ({
  chaîne,
  lettre,
}) => {
  let tableauDeLettresÀEssayer = [lettre.toLocaleLowerCase()]
  if (tableauDeLettresÀEssayer[0] === 'e') {
    tableauDeLettresÀEssayer.push('é', 'è', 'ê')
  } else if (tableauDeLettresÀEssayer[0] === 'a') {
    tableauDeLettresÀEssayer.push('à', 'â')
  }
  tableauDeLettresÀEssayer = [
    ...tableauDeLettresÀEssayer,
    ...tableauDeLettresÀEssayer.map(x => x.toLocaleUpperCase())
  ]
  let matchDeLaLettreRetenue = null

  for (let index = 0; index < tableauDeLettresÀEssayer.length; index++) {
    const lettre = tableauDeLettresÀEssayer[index]
    const match = chaîne.match(`.*?${lettre}`)

    if (match) {
      if (matchDeLaLettreRetenue) {
        if (match[0].length < matchDeLaLettreRetenue[0].length) {
          matchDeLaLettreRetenue = match
        }
      } else {
        matchDeLaLettreRetenue = match
      }
    }
  }

  if (matchDeLaLettreRetenue) {
    return [
      matchDeLaLettreRetenue[0].slice(0, -1),
      matchDeLaLettreRetenue[0].slice(-1),
      chaîne.slice(matchDeLaLettreRetenue[0].length),
    ]
  } else {
    return [chaîne, '', '']
  }
}

export default {
  estCeQueLaChaîneCorrespondÀLaDemande,
  coupeLaChaîneAvecLaLettre,
  formateLaDemande,
}
