// HOME VIEW
import { createElement } from './utils';

function Home() {
  const banner = createElement('img',{src:'#', alt:'plate of spaghetti', id:'banner'})
  const title = createElement('h2', { textContent: 'Look for a recipe' });
  const explanation = createElement('p', {textContent: 'You can filter the recipes by country or by kind of meal'});

  const page3Link = createElement('a', {
    href: '/#/page3',
    textContent: 'Country',
  });
  const page2Link = createElement('a', {
    href: '/#/page2',
    textContent: 'Meals of the Day',
  });
  const categories = createElement('div', {id:'categories'}, [page2Link, page3Link]);

  const bestrated1 = createElement('li',{id:'bestrated1'});
  const bestrated2 = createElement('li',{id:'bestrated2'});
  const bestrated3 = createElement('li',{id:'bestrated3'});
  const bestratedrecipes = createElement('ul', {},[bestrated1, bestrated2, bestrated3]);
  const bestratedblock = createElement('div', {id:'best-rated-recipes'}, [bestratedrecipes]);

  return createElement('div', {}, [banner, title, bestratedblock, explanation, categories]);
}

export default Home;