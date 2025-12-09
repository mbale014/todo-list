export default function addTodoDialog(getProjectsList) {
    // Mapped project list
    const projectList = getProjectsList().map(item => item.name);

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

    // Due date type
    const date = new Date();
    const isoString = date.toISOString();
    const formattedDateToday = isoString.split('T')[0];

    // Todo list form property
    const todoForm = [
        {id: 'task-title', name: 'Task title', type: 'text', isRequired: true},
        {id: 'task-desc', name: 'Description', type: 'text', isRequired: false},
        {id: 'task-due-date', name: 'Due Date', type: 'date', isRequired: false, value: formattedDateToday, min: formattedDateToday},
        {id: 'task-priority', name: 'Priority', type: 'select', isRequired: false},
        {id: 'task-project', name: 'Projects', type: 'select', isRequired: false},
    ];

    const selection = [
        {id: 'task-priority', options: ['Low', 'Medium', 'High']},
        {id: 'task-project', options: ['default', ...projectList]},
    ];

    todoForm.forEach(item => {
        const formRow = document.createElement('div');
        formRow.classList.add('form-row');

        const labelRow = document.createElement('label');
        labelRow.for = item.id;
        labelRow.textContent = item.name;

        formRow.appendChild(labelRow);

        // Type input handler
        if (item.type.toLowerCase() === 'select') {
            const selectRow = document.createElement('select');
            selectRow.id = item.id;
            selectRow.name = item.name;

            const {options} = selection.find(sel => sel.id === item.id);

            options.forEach(option => {
                const optionRow = document.createElement('option');
                optionRow.value = option.toLowerCase();
                optionRow.textContent = option;

                selectRow.appendChild(optionRow);
            });

            formRow.appendChild(selectRow);

        } else {
            const inputRow = document.createElement('input');
            inputRow.id = item.id;
            inputRow.name = item.name;
            inputRow.type = item.type;
            inputRow.required = item.isRequired;
            inputRow.value = item.value || '';
            inputRow.min = item.min || '';

            formRow.appendChild(inputRow);
        }

        form.appendChild(formRow);
    });

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