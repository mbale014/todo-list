export default function addTodoDialog() {
    // Dialog
    const dialog = document.createElement('dialog');
    dialog.id = 'add-todo-dialog'

    const titleDialog = document.createElement('h2');
    titleDialog.textContent = 'New Task';

    // Form new todo
    const form = document.createElement('form');
    form.action = '';
    form.method = 'dialog';

    // Form row
    const todoForm = [
        {id: 'task-title', name: 'Task title', type: 'text', isRequired: true},
        {id: 'task-desc', name: 'Description', type: 'text', isRequired: false},
        {id: 'task-due-date', name: 'Due Date', type: 'select', isRequired: false},
        {id: 'task-priority', name: 'Priority', type: 'select', isRequired: false},
        {id: 'task-project', name: 'Projects', type: 'select', isRequired: false},
    ];

    const selection = [
        {}
    ]

    todoForm.forEach(item => {
        const formRow = document.createElement('div');
        formRow.classList.add('form-row');

        const labelRow = document.createElement('label');
        labelRow.for = item.id;
        labelRow.textContent = item.name;

        const inputRow = document.createElement('input');
        inputRow.id = item.id;
        inputRow.name = item.name;
        inputRow.type = item.type;
        inputRow.required = item.isRequired;

        formRow.appendChild(labelRow);
        formRow.appendChild(inputRow);

        form.appendChild(formRow);
    })

    // Dialog buttons
    const buttonsDialogDiv = document.createElement('div');
    buttonsDialogDiv.classList.add('button-dialog');
    
    const cancelBtn = document.createElement('button');
    cancelBtn.value = 'cancel';
    cancelBtn.formMethod = 'dialog';
    cancelBtn.formNoValidate = true;
    cancelBtn.textContent = 'Cancel';

    const addBtn = document.createElement('button');
    addBtn.id = 'add-btn-dialog';
    addBtn.value = 'default';
    addBtn.type = 'submit';
    addBtn.textContent = 'Add task';

    buttonsDialogDiv.appendChild(cancelBtn);
    buttonsDialogDiv.appendChild(addBtn);

    form.appendChild(buttonsDialogDiv);
    

    
    dialog.appendChild(titleDialog);
    dialog.appendChild(form);

    document.body.appendChild(dialog);
}