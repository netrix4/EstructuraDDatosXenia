'use strict';

export const recipeSearch = async (foodName) => {
    const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=' + foodName + '&key=f71e347e-833b-473d-9a12-4f50fc74b1b9');
    const data = await response.json();
    return data;
};