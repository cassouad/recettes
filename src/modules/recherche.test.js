import Recherche from './recherche'

describe('Recherche', () => {
  describe('estCeQueLaChaîneCorrespondÀLaDemande', () => {
    describe('quand la demande est vide', () => {
      describe('et que la chaîne est vide', () => {
        test('doit renvoyer vrai', () => {
          const demande = ''
          const chaîne = ''

          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })

          expect(réponse).toEqual(true)
        })
      })
    })

    describe('et que la chaîne n\'est pas vide', () => {
      test('doit renvoyer vrai', () => {
        const demande = ''
        const chaîne = 'pâte brisée'

        const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
          demande,
          chaîne,
        })

        expect(réponse).toEqual(true)
      })
    })
  })

  describe('quand la demande est une lettre', () => {
    describe('et que cette lettre apparait au moins une fois dans la chaîne', () => {
      test('doit renvoyer vrai', () => {
        const demande = 't'
        const chaîne = 'pâte brisée'

        const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
          demande,
          chaîne,
        })

        expect(réponse).toEqual(true)
      })
    })

    describe('et que cette lettre n\'apparait pas dans la chaîne', () => {
      test('doit renvoyer faux', () => {
        const demande = 'z'
        const chaîne = 'pâte brisée'

        const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
          demande,
          chaîne,
        })

        expect(réponse).toEqual(false)
      })
    })
  })

  describe('quand la demande est composée de plusieurs lettres', () => {
    describe('et que l\'on retrouve ces lettres dans le même ordre dans la chaîne', () => {
      test('doit renvoyer vrai', () => {
        const demande = 'trie'
        const chaîne = 'pâte brisée'

        const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
          demande,
          chaîne,
        })

        expect(réponse).toEqual(true)
      })
    })

    describe('et que l\'on ne retrouve pas ces lettres dans le même ordre dans la chaîne', () => {
      test('doit renvoyer faux', () => {
        const demande = 'etri'
        const chaîne = 'pâte brisée'

        const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
          demande,
          chaîne,
        })

        expect(réponse).toEqual(false)
      })
    })
  })

  describe('quand la demande et la chaîne ont des majuscules', () => {
    test('doit les ignorer et les considérer comme des minuscules', () => {
      const demande = 'PbS'
      const chaîne = 'pâte Brisée'

      const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
        demande,
        chaîne,
      })

      expect(réponse).toEqual(true)
    })
  })

  describe('quand il y a des espaces dans la demande', () => {
    describe('quand il y a un seul espace', () => {
      describe('quand la chaîne a un espace entre les deux lettres de la demande', () => {
        test('doit renvoyer vrai', () => {
          const demande = 'te se'
          const chaîne = 'pâte brisée'
  
          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })
  
          expect(réponse).toEqual(true)
        })
      })

      describe('quand la chaîne n\'a pas un espace entre les deux lettres de la demande', () => {
        test('doit renvoyer faux', () => {
          const demande = 't ese'
          const chaîne = 'pâte brisée'
  
          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })
  
          expect(réponse).toEqual(false)
        })
      })
    })

    describe('quand il y a plusieurs espaces (même comportement q\'avec un espace)', () => {
      describe('quand la chaîne a un espace entre les deux lettres de la demande', () => {
        test('doit renvoyer vrai', () => {
          const demande = 'te    se'
          const chaîne = 'pâte brisée'
  
          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })
  
          expect(réponse).toEqual(true)
        })
      })

      describe('quand la chaîne n\'a pas un espace entre les deux lettres de la demande', () => {
        test('doit renvoyer faux', () => {
          const demande = 't    ese'
          const chaîne = 'pâte brisée'
  
          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })
  
          expect(réponse).toEqual(false)
        })
      })
    })
  })

  

  describe('coupeLaChaîneAvecLaLettre', () => {
    describe('quand la chaîne est vide', () => {
      describe('doit renvoyer ["", "", ""]', () => {
        test('pour une lettre vide', () => {
          const lettre = ''
          const chaîne = ''

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['', '', ''])
        })

        test('pour une lettre qui n\'est pas vide', () => {
          const lettre = 'j'
          const chaîne = ''

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['', '', ''])
        })
      })
    })

    describe('quand la chaîne n\'est pas vide', () => {
      describe('et que la lettre ne se trouve pas dans la chaîne', () => {
        test('doit renvoyer [chaîne, "", ""]', () => {
          const lettre = 'j'
          const chaîne = 'pâte brisée'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['pâte brisée', '', ''])
        })
      })

      describe('et que la lettre se trouve dans la chaîne', () => {
        test('doit renvoyer [avant la première occurrence de la lettre, la lettre, après la première occurrence de la lettre]', () => {
          const lettre = 'e'
          const chaîne = 'pâte brisée'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['pât', 'e', ' brisée'])
        })
      })

      describe('et que la lettre est une majuscule', () => {
        test('doit se comporter comme une lettre minuscule', () => {
          const lettre = 'E'
          const chaîne = 'pâte briséE'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['pât', 'e', ' briséE'])
        })
      })
    })

    describe('quand la chaîne a une ou des majuscules et que la lettre est une minuscule', () => {
      describe('quand la première occurrence de la lettre dans la chaîne est une majuscule', () => {
        test('doit renvoyer la lettre en majuscule en seconde position du tableau', () => {
          const lettre = 'e'
          const chaîne = 'pâtE brisée'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['pât', 'E', ' brisée'])
        })
      })
    })
  })
})
