import {getTodoList}   from "./storage.js";

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

    // Todo dashboard
    const dashboardDiv = document.createElement('div');
    dashboardDiv.id = 'home-dashboard'

    const todoList = document.createElement('div');
    todoList.id = 'todo-list';

    getTodoList().forEach(todo => {
        const todoRow = document.createElement('div');
        todoRow.classList.add('todo-row');

        const todoLeftInfo = document.createElement('div');

        const checkboxTodo = document.createElement('input');
        checkboxTodo.type = 'checkbox';
        checkboxTodo.name = 'todoIsComplete';
        checkboxTodo.value = 'isComplete';

        const todoNameSpan = document.createElement('span');
        const todoName = document.createElement('h3');
        todoName.textContent = todo.title;
        todoName.style.fontWeight = 400;

        todoNameSpan.appendChild(todoName);

        todoLeftInfo.appendChild(checkboxTodo);
        todoLeftInfo.appendChild(todoNameSpan);

        const todoRightNav = document.createElement('div');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-todo-btn');
        editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-todo-btn');
        deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';

        todoRightNav.appendChild(editBtn);
        todoRightNav.appendChild(deleteBtn);

        todoRow.appendChild(todoLeftInfo);
        todoRow.appendChild(todoRightNav);

        todoList.appendChild(todoRow);
    });
    
    dashboardDiv.appendChild(todoList);


    contentDiv.appendChild(todaysDateDiv);
    contentDiv.appendChild(dashboardDiv);
    containerDiv.appendChild(contentDiv)
}