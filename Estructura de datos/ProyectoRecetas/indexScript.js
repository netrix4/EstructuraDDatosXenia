'use strict';

console.log('Testin de consola');

import { pokeSearch } from './pokeFecht.js';

async function callPokemon(data) {
  return await pokeSearch(data.toLowerCase());
}