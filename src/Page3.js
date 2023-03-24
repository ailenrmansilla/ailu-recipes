// RECIPES ORGANIZED BY COUNTRY OF ORIGIN
import { createElement } from './utils';

function Countries() {
  const title = createElement('h2', { textContent: 'Recipes by Country' });
  const explanation = createElement('p', {textContent: 'Click on a country to see our recipes'});

  const china = createElement('button', {type:'button', id:'china-button', textContent: 'Chinese'});
  china.addEventListener("click", function(){}); // display chinese recipes

  const mexico = createElement('button', {type:'button', id:'mexico-button', textContent: 'Mexican'});
  mexico.addEventListener("click", function(){});

  const italy = createElement('button', {type:'button', id:'italy-button', textContent: 'Italian'});
  italy.addEventListener("click", function(){});

  const british = createElement('button', {type:'button', id:'british-button', textContent: 'British'});
  british.addEventListener("click", function(){});

  const south_america = createElement('button', {type:'button', id:'south-a-button', textContent: 'South American'});
  south_america.addEventListener("click", function(){});

  const countries = createElement('div',{id:'countries'},[china, mexico, italy, british, south_america]);

  return createElement('div', {}, [title, explanation, countries]);
}

export default Countries;