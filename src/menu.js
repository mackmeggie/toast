


function menuLoad() {
    

    const element = document.querySelector('div#content');

    const headingContainer = document.createElement('div');
    contentContainer.appendChild(headingContainer);

    const heading = document.createElement('h1');
    heading.textContent="Menu"
    headingContainer.appendChild(heading);


    const waffles = document.createElement('p');
    waffles.textContent="Waffles";
    contentContainer.appendChild(waffles);

    const pancakes = document.createElement('p');
    waffles.textContent="Pancakes";
    contentContainer.appendChild(pancakes);

    const eggsBenny = document.createElement('p');
    waffles.textContent="Eggs Benny";
    contentContainer.appendChild(eggsBenny);

    const frenchToast = document.createElement('p');
    waffles.textContent="French Toast";
    contentContainer.appendChild(frenchToast);

    return menuLoad;
};

export default menuLoad;