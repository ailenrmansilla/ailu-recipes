// HOME VIEW
import { createElement } from './utils';
import {
  fetchData
} from "./ExternalServices.mjs";
import {
  createRecipesPreview
} from "./RecipeStructure.mjs";

function Home() {
  const search_bar = createElement('input', { type:'text', id:'search_bar', placeholder: 'Search for a recipe...' });
  const form = createElement('form', {id: 'search_bar_form'},[search_bar]);
  form.addEventListener('submit', async function(e){
    e.preventDefault();
    // the user's input
    let userQuery = e.target.querySelector('input').value;
    console.log(userQuery);

    let page = document.getElementById('home-page');
    let section_results = document.getElementById('section-recipes');
    document.getElementById('section-recipes').innerHTML= ""; 
    results = await fetchData(userQuery);
    console.log(results); // data.hits
    results.forEach(result => {
      section_results.appendChild(createRecipesPreview(result)); // each recipe (there are 20)
    });
  })

  let section_results = createElement('div',{id:'section-recipes'},[]);
  const banner = createElement('img',{src: require("./images/spaghetti.jpg"), alt:'plate of spaghetti', id:'banner'})
  const title = createElement('h2', {id:'title', textContent: 'Look for a recipe' });
  const explanation = createElement('h3', {textContent: 'You can also filter the recipes by country or by kind of meal'});
  const comment = createElement('p', {textContent:'We count with lots of food ideas for any meal and style! Start here'});
  
  const page3Link = createElement('a', {
    href: '/#/page3',
    textContent: 'Country',
  });
  const page2Link = createElement('a', {
    href: '/#/page2',
    textContent: 'Meals of the Day',
  });

  const categories = createElement('div', {id:'categories'}, [page2Link, page3Link]);

  // const bestrated1 = createElement('li',{id:'bestrated1'});
  // const bestrated2 = createElement('li',{id:'bestrated2'});
  // const bestrated3 = createElement('li',{id:'bestrated3'});
  // const bestratedrecipes = createElement('ul', {},[bestrated1, bestrated2, bestrated3]);
  // const bestratedblock = createElement('div', {id:'best-rated-recipes'}, [bestratedrecipes]);


  // add again the elements I commented out 
  return createElement('div', {id:'home-page'}, [title, form, section_results, banner, explanation, comment, categories]);
}

export default Home;