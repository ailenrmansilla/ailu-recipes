// RECIPES ORGANIZED BY MEAL TIME

// just update the main div
import { createElement } from './utils';
import {
  createRecipe,
  createRecipesPreview
} from "./RecipeStructure.mjs";
import {displayListMealType} from "./ExternalServices.mjs";

function Content(heading, children = []){
  const titleHeading = createElement('h2', { textContent: heading + ' Recipes' });
  // external services and recipe structure stuff

  return createElement('div',{},[titleHeading]);
}


function Kindofmeal() {
  const title = createElement('h2', { textContent: 'Recipes by Meals of the Day' });
  const explanation = createElement('p', {textContent: 'Click a meal type to see our recipes'});


  const breakfast = createElement('button', {type:'button', id:'breakfast-button', textContent: 'Breakfast'});
  // display breakfast recipes 
  breakfast.addEventListener("click", async function(){
    let page = document.getElementById('meals-page');
    results = await displayListMealType('Breakfast');
    console.log(results); // I can't see this in the console
    // There is an error with this function
    results.forEach(result => {
      page.innerHTML += createRecipesPreview(result)
    });

  }); 
  
  const lunch = createElement('button', {type:'button', id:'lunch-button', textContent: 'Lunch'});
  lunch.addEventListener("click", function(){
  }); 
  
  const dinner = createElement('button', {type:'button', id:'dinner-button', textContent: 'Dinner'});
  dinner.addEventListener("click", function(){
  }); 

  const meals = createElement('div', {id:'meals'}, [breakfast, lunch, dinner]);

  return createElement('div', {id:'meals-page'}, [title, explanation, meals]);
}

export default Kindofmeal;
