// just update the main div
import { createElement } from './utils';

function Countries() {
  const title = createElement('h2', { textContent: 'Recipes by Country' });
  const explanation = createElement('p', {textContent: 'Click on a country to see our recipes'});

  const china = createElement('button', {type:'button', id:'china-button', textContent: 'Chinese'});
  china.addEventListener("click", function(){}); // display chinese recipes

  const mexico = createElement('button', {type:'button', id:'mexico-button', textContent: 'Mexican'});
  mexico.addEventListener("click", function(){});

  const peru = createElement('button', {type:'button', id:'peru-button', textContent: 'Peruvian'});
  peru.addEventListener("click", function(){});

  const spain = createElement('button', {type:'button', id:'spain-button', textContent: 'Spanish'});
  spain.addEventListener("click", function(){});

  const argentina = createElement('button', {type:'button', id:'argentina-button', textContent: 'Argentinian'});
  argentina.addEventListener("click", function(){});

  const countries = createElement('div',{id:'countries'},[china, mexico, peru, spain, argentina]);

  return createElement('div', {}, [title, explanation, countries]);
}

export default Countries;