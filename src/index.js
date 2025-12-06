import createTodo, { toggleChecklist, changePrior} from "./todo.js"
import {getTodoList, addTodo, removeTodo} from "./storage.js";
import loadMain from "./main-page.js";

loadMain();

const myTodo = createTodo(
    {title:'hello world',
    desc: 'hellow guys in world',
    dueDate: '2025-12-12',
    prior: true,
    notes: 'nope',
    checklist: false}
    );

addTodo(myTodo);
console.log(getTodoList())