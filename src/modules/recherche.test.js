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


    describe('quand la demande à des lettres accentuées', () => {
      describe('quand la demande à un é', () => {
        test('doit être traité comme un e', () => {
          const demande = 'eee'
          const chaîne = 'pâte brisée'

          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })

          expect(réponse).toEqual(true)
        })
      })

      describe('quand la demande à un è', () => {
        test('doit être traité comme un e', () => {
          const demande = 'ees'
          const chaîne = 'règles'

          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })

          expect(réponse).toEqual(true)
        })
      })

      describe('quand la demande à un ê', () => {
        test('doit être traité comme un e', () => {
          const demande = 'ee'
          const chaîne = 'être'

          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })

          expect(réponse).toEqual(true)
        })
      })

      describe('quand la demande à un â', () => {
        test('doit être traité comme un a', () => {
          const demande = 'pas'
          const chaîne = 'pâtes'

          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })

          expect(réponse).toEqual(true)
        })
      })

      describe('quand la demande à un à', () => {
        test('doit être traité comme un a', () => {
          const demande = 'aaie'
          const chaîne = 'À faire'

          const réponse = Recherche.estCeQueLaChaîneCorrespondÀLaDemande({
            demande,
            chaîne,
          })

          expect(réponse).toEqual(true)
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

    describe('quand la chaîne à des lettres accentuées', () => {
      describe('quand la chaîne à un é', () => {
        test('doit se comporter comme un e', () => {
          const lettre = 'e'
          const chaîne = 'brisée'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['bris', 'é', 'e'])
        })
      })

      describe('quand la chaîne à un è', () => {
        test('doit se comporter comme un e', () => {
          const lettre = 'e'
          const chaîne = 'rÈgles'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['r', 'È', 'gles'])
        })
      })

      describe('quand la chaîne à un ê', () => {
        test('doit se comporter comme un e', () => {
          const lettre = 'e'
          const chaîne = 'être'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['', 'ê', 'tre'])
        })
      })

      describe('quand la chaîne à un â', () => {
        test('doit se comporter comme un a', () => {
          const lettre = 'a'
          const chaîne = 'des pâtes'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['des p', 'â', 'tes'])
        })
      })

      describe('quand la chaîne à un à', () => {
        test('doit se comporter comme un a', () => {
          const lettre = 'a'
          const chaîne = 'À faire'

          const réponse = Recherche.coupeLaChaîneAvecLaLettre({
            lettre,
            chaîne,
          })

          expect(réponse).toEqual(['', 'À', ' faire'])
        })
      })
    })
  })

  describe('formateLaDemande', () => {
    test('doit remplacer les espaces par un espace', () => {
      const demande = 'a   faire,  super'

      const réponse = Recherche.formateLaDemande({
        demande,
      })

      expect(réponse).toEqual('a faire, super')
    })

    test('doit remplacer les lettres majuscules par des minuscules', () => {
      const demande = 'A fairE, super'

      const réponse = Recherche.formateLaDemande({
        demande,
      })

      expect(réponse).toEqual('a faire, super')
    })

    test('doit remplacer les lettres accentuées leurs version sans accent', () => {
      const demande = 'à faire, super â é è ê !'

      const réponse = Recherche.formateLaDemande({
        demande,
      })

      expect(réponse).toEqual('a faire, super a e e e !')
    })
  })
})
