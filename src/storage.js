let storage = [];
let projects = [];

// Todo storing and modifying
function getTodoList() {
    return [...storage];
};

function addTodo(todo, projectId) {
    todo["project"] = projectId;
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

// Projects create and modifying
function getProjects() {
    return [...projects];
};

function addProject(name) {
    // Check if project name already exist to prevent duplicate (case-insensitive)
    if (projects.find(project => project.name === name)) {
        console.log(`Project ${name} already exist!`);
        return;
    };

    const projectLen = getProjects().length;

    const newProject = {
        id: `project-${projectLen + 1}`,
        name: name,
    };

    console.log(`Project ${newProject.name} has been added`);
    return projects.push(newProject);
};

function getProjectIndex(id) {
    const index = projects.findIndex(project => project.id === id);

    return {
        index,
    }
};

function removeProject(id) {
    const {index} = getProjectIndex(id);

    return projects.splice(index, 1);
};



export {getTodoList, addTodo, removeTodo, getProjects, addProject} 