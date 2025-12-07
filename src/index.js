import "./styles.css";
import createTodo, { toggleChecklist, changePrior} from "./todo.js"
import {getTodoList, addTodo, removeTodo, getProjects, addProject}   from "./storage.js";
import loadMain from "./main-page.js";

loadMain();

// This to test function on console, later it will be removed
const myTodo = createTodo({
    title:'hello world',
    desc: 'hellow guys in world',
    dueDate: '2025-12-12',
    prior: true,
    notes: 'nope',
    checklist: false
});

const myTodoTwo = createTodo({
    title:'hello guys',
    desc: 'top cinco scariest jumpscare',
    dueDate: '2025-12-12',
    prior: false,
    notes: 'nope too',
    checklist: true
});

addProject('inbox');
addProject('coding');
console.log(getProjects());

addTodo(myTodo, 'project-1');
addTodo(myTodoTwo, 'project-2');
console.log(getTodoList());