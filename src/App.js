import { createElement } from './utils';


function App() {
  const appTitle = createElement('h1', {textContent: 'Ailu Recipes', className: 'heading'});
  const header = createElement('header',{}, [appTitle])
  const main = createElement('main', {});

  const copyright = createElement('span',{textContent: `Copyright &copy; ${new Date().getFullYear()}`, })
  const footer = createElement('footer',{}, [copyright]);

  return createElement('div', {}, [header, main, footer]); 
}

export default App; // it returns that last createElement (the whole div)
// I can keep using functions like that to develop the structure of the website