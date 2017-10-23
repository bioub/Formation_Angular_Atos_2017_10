interface Coords2d {
  x: number,
  y: number,
}

const coords2d: Coords2d = {
  x: 10,
  y: 20,
};

const drawPoint = (coords: {x: number, y: number}) => {
  console.log(coords.x); // .x accessible via la completion
};

const drawPointAutre = (coords: Coords2d) => {
  console.log(coords.x); // .x accessible via la completion
};

/*
const Contact = function(prenom) {
  //this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour';
};
*/
class Contact {
  private prenom: string;
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    return `Bonjour je m'appelle ${this.prenom.toUpperCase()}`;
  }
  static getClass() {
    return 'Contact';
  }
}

console.log(typeof Contact); // function
console.log(Contact.getClass());

class Client extends Contact {
  constructor(prenom) {
    super(prenom);
  }
}
