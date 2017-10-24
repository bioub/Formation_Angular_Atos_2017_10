'use strict';

// REST Params
const sum = (...n) => n.reduce((a, b) => a + b);
console.log(sum(2, 3, 4));

// SPREAD Operator
const nbs = [2, 3, 4];
console.log(sum(nbs[0], nbs[1], nbs[2]));
console.log(sum(...nbs));
const autres = [1, ...nbs, 5, 6];
const clone = [...nbs];

// REST / SPREAD Object (ESNext)
const coords2d = {
  x: 10,
  y: 20,
};

const coords3d = {
  ...coords2d,
  z: 30,
};
const cloneObj = {...coords3d};

// Destructurer
/*
const nb1 = nbs[0];
const nb2 = nbs[1];
const nb3 = nbs[2];
*/
const [nb1, , nb3 = 0] = nbs;
const {x, y: maVarY, z = 0} = coords3d;

// Default Param et template string/literal
const hello = (prenom = 'Inconnu') => `Bonjour ${prenom} !`;
console.log(hello()); // Bonjour Inconnu !
