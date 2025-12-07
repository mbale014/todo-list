export default function loadMain() {
    // Fetch css color variable
    const rootElement = document.documentElement;
    const computedStyles = getComputedStyle(rootElement);
    const primaryColor = computedStyles.getPropertyValue('--primary-color');
    const secondaryColor = computedStyles.getPropertyValue('--grey');

    // Apply style to today's nav-bar
    const todaysBtn = document.querySelector('#nav-option nav .button-row:first-child button');
    todaysBtn.style.backgroundColor = secondaryColor;
    const todaysIcon = document.querySelector('#nav-option nav .button-row:first-child svg');
    todaysIcon.style.fill = primaryColor;

    // Remove content div if not already exist to prevent duplicate
    const existingContent = document.getElementById('content');
    if (existingContent) {
        existingContent.remove();
    };

    const containerDiv = document.getElementById('container');

    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';

    //Today's date header
    const todaysDate = new Date().toDateString();

    const todaysDateDiv = document.createElement('div');
    todaysDateDiv.classList.add('header');
    const h1Todays = document.createElement('h1');
    h1Todays.textContent = 'Today';
    const pDates = document.createElement('p');
    pDates.textContent = todaysDate;

    todaysDateDiv.appendChild(h1Todays);
    todaysDateDiv.appendChild(pDates);


    

    contentDiv.appendChild(todaysDateDiv);
    containerDiv.appendChild(contentDiv)
}