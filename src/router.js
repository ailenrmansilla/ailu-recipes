import { createElement } from './utils';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

// mainView is where we want to load items into
export function initRouter(mainView) {
  function updateView(newView) {
    mainView.innerHTML = '';
    mainView.appendChild(newView);
  }

  function hashToRoute(hash) {
    switch (hash) {
      case '#/page1':
        updateView(Page1()); // it returns the new content for main
        break;

      case '#/page2':
        updateView(Page2());
        break;

      case '#/page3':
        updateView(Page3());
        break;

      default:
        updateView(createElement('h3', { textContent: '404 Page Not Found' }));
        break;
    }
  }

  const defaultHash = window.location.hash || '#/page1';
  hashToRoute(defaultHash);

  window.addEventListener('hashchange', (evt) => {
    const newUrl = new URL(evt.newURL);
    const hash = newUrl.hash;

    hashToRoute(hash);
  });
}