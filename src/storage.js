let storage = [];

function getTodoList() {
    return [...storage];
};

function addTodo(todo) {
    console.log(`Todo named ${todo.title} has been added.`);
    return storage.push(todo);
};

function getTodoIndex(id) {
    const index = storage.findIndex(todo => todo.UUID === id);

    return {
        index,
    };
};

function removeTodo(id) {
    const {index} = getTodoIndex(id);

    return storage.splice(index, 1);
};

export {getTodoList, addTodo, removeTodo} 