// RECIPES ORGANIZED BY COUNTRY OF ORIGIN
import { createElement } from './utils';
import {
  createRecipesPreview
} from "./RecipeStructure.mjs";
import {displayListCuisineType} from "./ExternalServices.mjs";

function Countries() {
  const title = createElement('h2', { textContent: 'Recipes by Country' });
  const explanation = createElement('p', {textContent: 'Click on a country to see our recipes'});




  const china = createElement('button', {type:'button', id:'china-button', textContent: 'Chinese'});
  china.addEventListener("click", async function(){
    let page = document.getElementById('countries-section');
    let section_recipes = document.getElementById('section-recipes');
    if (section_recipes == null){
      // check if this section already exists
      section_recipes = createElement('div',{id:'section-recipes'},[]);
      page.appendChild(section_recipes);}
    else{
      document.getElementById('section-recipes').innerHTML= ""; 
    }
    results = await displayListCuisineType('Chinese');
    console.log(results); // data.hits
    results.forEach(result => {
      section_recipes.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });
  }); // display chinese recipes



  const mexico = createElement('button', {type:'button', id:'mexico-button', textContent: 'Mexican'});
  mexico.addEventListener("click", async function(){
    let page = document.getElementById('countries-section');
    let section_recipes = document.getElementById('section-recipes');
    if (section_recipes == null){
      // check if this section already exists
      section_recipes = createElement('div',{id:'section-recipes'},[]);
      page.appendChild(section_recipes);}
    else{
      document.getElementById('section-recipes').innerHTML= ""; 
    }
    results = await displayListCuisineType('Mexican');
    console.log(results); // data.hits
    results.forEach(result => {
      section_recipes.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });
  });

  const italy = createElement('button', {type:'button', id:'italy-button', textContent: 'Italian'});
  italy.addEventListener("click", async function(){
    let page = document.getElementById('countries-section');
    let section_recipes = document.getElementById('section-recipes');
    if (section_recipes == null){
      // check if this section already exists
      section_recipes = createElement('div',{id:'section-recipes'},[]);
      page.appendChild(section_recipes);}
    else{
      document.getElementById('section-recipes').innerHTML= ""; 
    }
    results = await displayListCuisineType('Italian');
    console.log(results); // data.hits
    results.forEach(result => {
      section_recipes.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });
  });

  const british = createElement('button', {type:'button', id:'british-button', textContent: 'British'});
  british.addEventListener("click", async function(){
    let page = document.getElementById('countries-section');
    let section_recipes = document.getElementById('section-recipes');
    if (section_recipes == null){
      // check if this section already exists
      section_recipes = createElement('div',{id:'section-recipes'},[]);
      page.appendChild(section_recipes);}
    else{
      document.getElementById('section-recipes').innerHTML= ""; 
    }
    results = await displayListCuisineType('British');
    console.log(results); // data.hits
    results.forEach(result => {
      section_recipes.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });
  });

  const south_america = createElement('button', {type:'button', id:'south-america-button', textContent: 'South American'});
  south_america.addEventListener("click", async function(){
    let page = document.getElementById('countries-section');
    let section_recipes = document.getElementById('section-recipes');
    if (section_recipes == null){
      // check if this section already exists
      section_recipes = createElement('div',{id:'section-recipes'},[]);
      page.appendChild(section_recipes);}
    else{
      document.getElementById('section-recipes').innerHTML= ""; 
    }
    results = await displayListCuisineType('South%20American');
    console.log(results); // data.hits
    results.forEach(result => {
      section_recipes.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });
  });

  const countries = createElement('div',{id:'countries'},[china, mexico, italy, british, south_america]);

  return createElement('div', {id:'countries-section'}, [title, explanation, countries]);
}

export default Countries;