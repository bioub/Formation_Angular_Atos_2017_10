// 1 - Extensibilité

console.log(Math.sum); // undefined

// On peut ajouter des clés/valeurs
Math.sum = (a, b) => a + b;
console.log(Math.sum(2, 3)); // 5
console.log(Math.sum('2', '3')); // '23'

// On peut modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum(2, 3)); // 5
console.log(Math.sum('2', '3')); // 5

const lettreAlea = () => {
  const code = Math.floor(Math.random() * 26) + 65;
  return String.fromCharCode(code);
};

// Test de A
const randomBackup = Math.random;
Math.random = () => 0; // Monkey Patch
console.log(lettreAlea()); // A
Math.random = randomBackup;

// On peut supprimer des clés/valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// Nouvel objet avec object literal (besoin ponctuel)
const coords2d = {
  x: 10,
  y: 20,
};

/*
// Exemple passage de params optionnels
// à une foncion
jQuery.ajax({
  url: '/',
  method: 'GET',
  onSuccess: function(){

  }
})
*/

// Nouvel objet avec une fonction constructeur (besoin récurrent)
const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this._prenom;
};

const romain = new Contact('Romain');
console.log(typeof Contact); // function
console.log(typeof romain); // object
console.log(romain.hello());
console.log(romain instanceof Contact); // true

const jean = new Contact('Jean');

console.log(romain.hello === jean.hello); // true
