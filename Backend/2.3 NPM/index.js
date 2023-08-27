// 1-sillyname
// var generateName = require('sillyname'); // using CJS

import generateName from 'sillyname'; // using the new way - ECMA (to stay consistent in frontend and backend)
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// 2-superheroes
// const superheroes = require('superheroes');
import superheroes from 'superheroes';
console.log(`My name is ${superheroes.random()}.`);