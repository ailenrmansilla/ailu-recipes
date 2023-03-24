// function that creates a recipe structure
export function createRecipe(recipe_name, recipe_picture, recipe_calories, recipe_ingredients, recipe_steps){
    const title = createElement('h2',{textContent: `${recipe_name}`});
    const picture = createElement('img',{src: `${recipe_picture}`});
    const ingredients = createElement('p',{textContent: `${recipe_ingredients}`});
    const steps = createElement('p',{id:'recipe-procedure', textContent: `${recipe_steps}`});

    return createElement('div',{className: 'recipe-block'},[title,picture,calories, ingredients, steps]);
}
// function to create a recipe's preview
export function createRecipesPreview(result){
    const title = createElement('h2',{textContent: `${result.recipe.label}`});
    const picture = createElement('img',{src: `${result.recipe.images.small}`});
    const link = createElement('a',{href: `${result.recipe.url}`, textContent: 'View Recipe'});
   
    return createElement('div',{className:'recipe-preview'},[title, picture, link]);
}

