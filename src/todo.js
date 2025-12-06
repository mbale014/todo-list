// create behavior todo list property function
function setDueDate({dueDate}) {
    const date = new Date(dueDate);
    const dateString = date.toDateString();

    return {
        dueDate : dateString,
    };
};

function setPriority({prior}) {
    if (prior !== true && prior !== false) return false;

    return {
        prior: prior,
    };
};

function setChecklist({checklist}) {
    if (checklist !== true && checklist !== false) return false;

    return {
        checklist : checklist,
    };
};

// Modify todo item value function
function toggleChecklist(todo) {
    return todo.checklist = !todo.checklist

};

function changePrior(todo, newPrior) {
    return todo.prior = newPrior;
}

//Create random UUID
function setRandUUID() {
    return crypto.randomUUID();
}

// Todo creator
const createTodo = function({title, desc, dueDate, prior, notes, checklist}) {
    const formattedDate = setDueDate({dueDate});
    const validatedPriority = setPriority({prior});
    const validatedChecklist = setChecklist({checklist});

    const todo = {
        title: title,
        desc: desc,
        dueDate: formattedDate.dueDate,
        prior: validatedPriority.prior,
        notes: notes,
        checklist: validatedChecklist.checklist,
        UUID: setRandUUID(),
        project: 'default',
    };

    return todo;
};

const myTodo = createTodo(
    {title:'hello world',
    desc: 'hellow guys in world',
    dueDate: '2025-12-12',
    prior: true,
    notes: 'nope',
    checklist: false}
    );

// export default createTodo;
// export {toggleChecklist, changePrior}