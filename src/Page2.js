// RECIPES ORGANIZED BY MEAL TIME

// just update the main div
import { createElement } from './utils';
import {
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
    let section_recipes = document.getElementById('section-recipes');
    if (section_recipes == null){
      // check if this section already exists
      section_recipes = createElement('div',{id:'section-recipes'},[]);
      page.appendChild(section_recipes);}
    else{
      document.getElementById('section-recipes').innerHTML= ""; 
    }
    results = await displayListMealType('Breakfast');
    console.log(results); // data.hits
    results.forEach(result => {
      section_recipes.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });

  }); 
  
  const lunch = createElement('button', {type:'button', id:'lunch-button', textContent: 'Lunch'});
  lunch.addEventListener("click", async function(){
    let page = document.getElementById('meals-page');
    let section_recipes = document.getElementById('section-recipes');
    if (section_recipes == null){
      // check if this section already exists
      section_recipes = createElement('div',{id:'section-recipes'},[]);
      page.appendChild(section_recipes);}
    else{
      document.getElementById('section-recipes').innerHTML= ""; 
    }
    results = await displayListMealType('Lunch'); // data.hits
    results.forEach(result => {
      section_recipes.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });

  }); 
  
  const dinner = createElement('button', {type:'button', id:'dinner-button', textContent: 'Dinner'});
  dinner.addEventListener("click", async function(){
    let page = document.getElementById('meals-page');
    let section_recipes = document.getElementById('section-recipes');
    if (section_recipes == null){
      // check if this section already exists
      section_recipes = createElement('div',{id:'section-recipes'},[]);
      page.appendChild(section_recipes);}
    else{
      document.getElementById('section-recipes').innerHTML= ""; 
    }
    results = await displayListMealType('Dinner'); // data.hits
    results.forEach(result => {
      section_recipes.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });

  }); 
  const meals = createElement('div', {id:'meals'}, [breakfast, lunch, dinner]);

  return createElement('div', {id:'meals-page'}, [title, explanation, meals]);
}

export default Kindofmeal;
