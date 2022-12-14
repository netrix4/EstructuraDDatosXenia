'use strict';

console.log('Testin de consola');

import { recipeSearch } from './recipeFetcher.js';

FillWithNoContent();
let recipesList = null;

async function getRecipes(food) {
  return await recipeSearch(food.toLowerCase());
}

function FillWithNoContent() {
  const recipesContainer = document.getElementById('recipesContainer')
  recipesContainer.innerHTML = '';

  const noContentContainer = document.createElement('div')
  noContentContainer.classList.add('noContentContainer')

  const h1NoContentTitle = document.createElement('h1')
  h1NoContentTitle.textContent = 'Haz una busqueda para empezar'
  
  const imgNoContent = document.createElement('img')
  imgNoContent.src = './resources/No-Content.png'
  imgNoContent.classList.add('noContentImage')

  noContentContainer.append(h1NoContentTitle, imgNoContent);
  recipesContainer.append(noContentContainer);
}

async function onSearchButtonClick() {
  const recipeToSearch = document.getElementById('txtSearch').value
  const apiResponse = await getRecipes(recipeToSearch);
  recipesList = apiResponse

  console.log(apiResponse);

  const recipesContainer = document.getElementById('recipesContainer')
  recipesContainer.innerHTML = '';

  if (apiResponse.results) {
    apiResponse.data.recipes.forEach(recipe => {
      CreateRecipesCards(recipe);
      
    });
    
  } else {
    FillWithNoContent();
  }
}
function onClearButtonClick() {
  const recipeToSearch = document.getElementById('txtSearch')
  recipeToSearch.value = '';
  FillWithNoContent();
  
}

const onViewMoreClick = (recipe) => () =>{
  console.log(recipe);
  const detailsModal = document.getElementById('detailsModal')
  const modalInformationContainer = document.createElement('div')
  modalInformationContainer.classList.add('modalInformationContainer');

  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const parraph = document.createElement('p')
  const btnCloseModal = document.createElement('button');
  
  btnCloseModal.textContent = 'Cerrar';
  btnCloseModal.classList.add('btnSearch');
  h1.textContent = recipe.title;
  img.src = recipe.image_url;
  parraph.textContent = recipe.publisher
  img.classList.add('modalImage')
  btnCloseModal.onclick = () => window.detailsModal.close();

  detailsModal.innerHTML = '';
  modalInformationContainer.append(h1, img, parraph, btnCloseModal);
  detailsModal.append(modalInformationContainer);
  detailsModal.show();
}

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
  dimmedText.onclick = onViewMoreClick(recipe);
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

const searchButton = document.getElementById('btnSearch');
const clearButton = document.getElementById('btnClear');

clearButton.onclick = onClearButtonClick;
searchButton.onclick = onSearchButtonClick;
