import './style.css';
import homeLoad from './home';
import menuLoad from './menu';

function buildNav() {

    const element = document.querySelector('div#content');

    const nav = document.createElement('nav');
    element.appendChild(nav);

    const homeTab = document.createElement('button');
    homeTab.classList.add('button-nav')
    homeTab.id="tab1";
    homeTab.textContent="Home";
    homeTab.addEventListener('click', (e) => {
        clearDOM();
        homeLoad();
    })
    nav.appendChild(homeTab);

    const menuTab = document.createElement('button');
    menuTab.classList.add('button-nav')
    menuTab.id="tab2";
    menuTab.textContent="Menu";
    menuTab.addEventListener('click', (e) => {
        clearDOM();
        menuLoad();
    });
    nav.appendChild(menuTab);

    const contactTab = document.createElement('button');
    contactTab.classList.add('button-nav')
    contactTab.id="tab3";
    contactTab.textContent="Contact";
    nav.appendChild(contactTab);

    return buildNav;
}

function buildBackground() {
    const element = document.querySelector('div#content');

    const contentContainer = document.createElement('div');
    contentContainer.id="contentContainer";
    element.appendChild(contentContainer);
}

function clearDOM() {
    const contentContainer = document.getElementById('contentContainer');
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
}

  buildNav();
  buildBackground();
  homeLoad();
 
