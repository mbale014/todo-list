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
        editBtn.classList.add('edit-todo');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-todo');
        deleteBtn.textContent = 'delete';

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