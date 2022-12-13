'use strict';

export const pokeSearch = async (pokemonName) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName, {
    headers:{
      'authorization': 'bf7df6c5-25f7-4e74-98c5-90e46af59c00'
    }
  });
  const data = await response.json();
  return data;
};