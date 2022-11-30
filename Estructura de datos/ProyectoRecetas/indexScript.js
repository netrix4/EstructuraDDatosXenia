'use strict';

console.log('Testin de consola');

import { recipeSearch } from './recipeFetcher.js';

async function getRecipes(food) {
  return await recipeSearch(food.toLowerCase());
}

const apiResponse = await getRecipes('pizza');

console.log(apiResponse);

apiResponse.data.recipes.forEach(recipe => {
  CreateRecipesCards(recipe);
});

function CreateRecipesCards(recipe){
  const singleRecipe = document.createElement('div')
  singleRecipe.classList.add('singleRecipe');
  
  const recipeImage = document.createElement('img')
  recipeImage.src = recipe.image_url;
  recipeImage.classList.add('recipePhoto');
  
  const trasition = document.createElement('div')
  trasition.classList.add('transition')
  
  const dimmedText = document.createElement('div')
  dimmedText.classList.add('dimmedText')
  dimmedText.textContent = 'Ver Más'
  trasition.append(dimmedText);
  
  const recipeDescription = document.createElement('div');
  recipeDescription.classList.add('recipeDescription')
  
    const descriptionContent = document.createElement('p');
    descriptionContent.textContent = recipe.title;
  
  recipeDescription.append(descriptionContent);
  
  singleRecipe.append(recipeImage);
  singleRecipe.append(trasition);
  singleRecipe.append(recipeDescription);
  
  const recipesContainer = document.getElementById('recipesContainer')
  recipesContainer.append(singleRecipe);
  
}