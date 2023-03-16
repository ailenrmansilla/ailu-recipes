import { createElement } from './utils';


function App() {
  const header = createElement('h1', {textContent: 'Ailu Recipes', className: 'heading'});

  const main = createElement('main', {});

  return createElement('div', {}, [header, main]); 
}

export default App; // it returns that last createElement (the whole div)
// I can keep using functions like that to develop the structure of the website