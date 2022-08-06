




function homeLoad() {
    const contentContainer = document.getElementById("contentContainer");
    const content = document.getElementById('content');

    const headingContainer = document.createElement('div');
    contentContainer.appendChild(headingContainer);

    const heading = document.createElement('h1');
    heading.textContent="Toast Cafe"
    headingContainer.appendChild(heading);

    
        const blurb = document.createElement('p');
        blurb.innerHTML="Welcome to the tastiest, toastiest brunch in town! Here at Toast we pride ourselves on making the yummiest food and the tastiest drinks, so you know you're getting the best meal around!" ;
        contentContainer.appendChild(blurb);
    
        const hours = document.createElement('ul');
        hours.innerText="Hours";
        contentContainer.appendChild(hours);
    
        const hoursList = document.createElement('li');
        hoursList.innerText = "Everyday 8:00am - 1:00pm";
        hours.appendChild(hoursList);
        
        return homeLoad;
};

export default homeLoad;