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
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeTab);
        clearDOM();
        homeLoad();
    })
    nav.appendChild(homeTab);

    const menuTab = document.createElement('button');
    menuTab.classList.add('button-nav')
    menuTab.id="tab2";
    menuTab.textContent="Menu";
    menuTab.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuTab);
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

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
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
 
