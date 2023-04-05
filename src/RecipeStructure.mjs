import {createElement} from './utils';

// function to create a recipe's preview
export function createRecipesPreview(result){
    const title = createElement('h3',{textContent: `${result.recipe.label}`});
    const picture = createElement('img',{src: `${result.recipe.images.SMALL.url}`});  // just the small picture for this preview
    const calories = createElement('p',{textContent: `Calories: ${Math.round(result.recipe.calories)}kcal`});
    let origin = result.recipe.cuisineType[0].charAt(0).toUpperCase() + result.recipe.cuisineType[0].slice(1);
    const country = createElement('p',{textContent: `Cuisine Type: ${origin}`});
    const mealType = createElement('p',{textContent: `Meal Type: ${result.recipe.mealType}`});
    const link = createElement('a',{href: `${result.recipe.url}`, textContent: 'View Recipe'});
   
    return createElement('div',{className:'recipe-preview'},[title, picture, country, mealType, calories, link]);
}

// function that creates a recipe structure
// export function createRecipe(recipe){
//     const title = createElement('h2',{textContent: `${recipe.label}`});
//     const picture = createElement('img',{src: `${recipe.images.LARGE.url}`}); // large picture
//     const calories = createElement('p',{textContent: `Calories: ${Math.round(recipe.calories)}kcal`});
//     let origin = recipe.cuisineType[0];
//     let origin_capitalized = origin.chartAt(0).toUpperCase() + origin.slice(1);
//     const country = createElement('p',{textContent: `Origin: ${origin_capitalized}`});
//     let ingredients_array = recipe.ingredientLines; // we don't know how long it is
//     const ingredients = '';
//     const mealType = createElement('p',{textContent: `Meal Type: ${recipe.mealType}`});


//     const steps = createElement('p',{id:'recipe-procedure', textContent: `${recipe.instructions}`}); // not found

//     return createElement('div',{className: 'recipe-block'},[title, picture, calories, country, mealType, ingredients, steps]);
// }


