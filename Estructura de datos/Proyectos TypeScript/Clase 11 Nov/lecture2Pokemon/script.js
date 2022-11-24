'use strict';
import { getPokeFromApi } from "./PokeFetch.js";

const boton = document.getElementById('btnPokeSearch')

const FecthPokeApiInfo = async () => {
    const inputName = document.getElementById("pokeNameInput");
    const pokemonToFind = inputName.value.toLowerCase();
    
    const pokemon = await getPokeFromApi(pokemonToFind);
    parraph.textContent = pokemon.name;
    imgPokemon.src = pokemon.sprites.front_default;
    pokemonNameFooter.textContent = pokemon.weight + ' kg';

}

const pokemon = await getPokeFromApi('mewtwo');

const main = document.getElementById('mainContentPokemon')

const parraph = document.createElement('p')
parraph.textContent = pokemon.name;

const imgPokemon = document.createElement('img')
imgPokemon.src = pokemon.sprites.front_default;

const pokemonNameFooter = document.createElement('p')
pokemonNameFooter.textContent = pokemon.weight + ' kg';

main.append(parraph)
main.append(imgPokemon)
main.append(pokemonNameFooter)

boton.onclick = FecthPokeApiInfo;