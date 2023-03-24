// MAIN APP CONTROLLER

import { createElement } from './utils';
import { initRouter } from './router';
import ExternalServices from "./ExternalServices.mjs";


function Header(mainDiv) {
  const logo = createElement('img', {src:"#", alt: "Ailu recipes logo"});
  const websiteTitle = createElement('h1', {textContent: 'Ailu Recipes', className: 'heading'});
  const login = createElement('a', {href:"/#/login", textContent: "Log in"})
  
  // nav items
  const home = createElement('a',{href:"/#/page1", textContent: "Home"});
  const meals = createElement('a',{href:"/#/page2", textContent: "Meals"});
  const countries = createElement('a',{href:"/#/page3", textContent: "Country"});

  const nav = createElement('nav',{},[home, meals, countries]);
  
  return createElement('header',{}, [logo, websiteTitle, nav, login]);
}

function Footer(){
  const copyright = createElement('span',{textContent: `Copyright ©${new Date().getFullYear()}`, })
  
  return createElement('footer',{}, [copyright]);
}

function App(){
  const main = createElement('main', {},[]);
  initRouter(main);

  return createElement('div', {}, [Header(main), main, Footer()]); 
}

export default App; // it returns that last createElement (the whole div)
// I can keep using functions like that to develop the structure of the website