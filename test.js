const Voiture = { roue: 4, couleur: 'rouge' }

Voiture.drive = function() { console.log('Voiture ' + this.couleur + ' broom') }

Voiture.drive()