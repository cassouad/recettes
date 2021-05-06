const estCeQueLaChaîneCorrespondÀLaDemande = ({
  chaîne,
  demande,
}) => {
  const formateLaChaîne = (chaîne) =>
    chaîne
      .toLocaleLowerCase()
      .replace(/\s+/g, ' ')
  // .replace(/â/g, 'a')
  // .replace(/éèê/g, 'e')

  // mettre en place les test jest dans le pipe update github ///

  demande = formateLaChaîne(demande)
  demande = demande.split('').join('.*?')
  chaîne = formateLaChaîne(chaîne)

  return chaîne.match(demande) !== null
}

const coupeLaChaîneAvecLaLettre = ({
  chaîne,
  lettre,
}) => {
  const tableauDeLettresÀEssayer = [
    lettre.toLocaleLowerCase(),
    lettre.toLocaleUpperCase(),
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
}
