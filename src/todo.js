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
    }

    return todo;
};

export default createTodo;