import {createElement} from './utils';

// function to create a recipe's preview
export function createRecipesPreview(result){
    const title = createElement('h3',{textContent: `${result.recipe.label}`});
    const picture = createElement('img',{src: `${result.recipe.images.SMALL.url}`, alt: `${result.recipe.label}`});  // just the small picture for this preview
    const calories = createElement('p',{textContent: `Calories: ${Math.round(result.recipe.calories)}kcal`});
    let origin = result.recipe.cuisineType[0].charAt(0).toUpperCase() + result.recipe.cuisineType[0].slice(1);
    const country = createElement('p',{textContent: `Cuisine Type: ${origin}`});
    const mealType = createElement('p',{textContent: `Meal Type: ${result.recipe.mealType}`});
    const link = createElement('a',{href: `${result.recipe.url}`, textContent: 'View Recipe'});
   
    return createElement('div',{className:'recipe-preview'},[title, picture, country, mealType, calories, link]);
}
