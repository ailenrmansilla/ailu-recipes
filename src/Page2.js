// just update the main div
import { createElement } from './utils';
// import a function that calls the file with the JSON information

function Content(heading, children = []){
  const titleHeading = createElement('h2', { textContent: heading + ' Recipes' });


  return createElement('div',{},[titleHeading]);
}


function Kindofmeal() {
  const title = createElement('h2', { textContent: 'Recipes by Meals of the Day' });
  const explanation = createElement('p', {textContent: 'Click a meal type to see our recipes'});

  const breakfast = createElement('button', {type:'button', id:'breakfast-button', textContent: 'Breakfast'});
  breakfast.addEventListener("click", function(){
    let page = document.getElementById('meals-page');
    page.innerHTML = '';
    page.appendChild(Content('Breakfast'));
  }); // display breakfast recipes 
  
  const lunch = createElement('button', {type:'button', id:'lunch-button', textContent: 'Lunch'});
  lunch.addEventListener("click", function(){}); 
  
  const dinner = createElement('button', {type:'button', id:'dinner-button', textContent: 'Dinner'});
  dinner.addEventListener("click", function(){}); 

  const meals = createElement('div', {id:'meals'}, [breakfast, lunch, dinner]);

  return createElement('div', {id:'meals-page'}, [title, explanation, meals]);
}

export default Kindofmeal;