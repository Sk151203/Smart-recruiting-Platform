document.addEventListener('DOMContentLoaded', function() {
    populateFormList();

    document.getElementById('createNewFormButton').addEventListener('click', function() {
        window.location.href = 'form_creation.html'; // Redirect to form creation screen
    });
});

function populateFormList() {
    const forms = getExistingForms(); // Simulate fetching existing forms

    const formListTable = document.getElementById('formListTable').getElementsByTagName('tbody')[0];
    forms.forEach(form => {
        const row = formListTable.insertRow();

        const cellName = row.insertCell(0);
        const cellJob = row.insertCell(1);
        const cellActions = row.insertCell(2);

        cellName.textContent = form.name;
        cellJob.textContent = form.associatedJob;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editForm(form.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteForm(form.id);
        });

        cellActions.appendChild(editButton);
        cellActions.appendChild(deleteButton);
    });
}

function getExistingForms() {
    // Simulating fetching forms from the backend or database
    return [
        { id: 1, name: 'Form A', associatedJob: 'Software Engineer' },
        { id: 2, name: 'Form B', associatedJob: 'Data Analyst' }
    ];
}

function editForm(formId) {
    // Logic to open the form editing screen with the form details pre-filled
    window.location.href = `form_editing.html?formId=${formId}`;
}

function deleteForm(formId) {
    // Logic to delete the form
    if (confirm('Are you sure you want to delete this form?')) {
        // Simulate deletion from backend
        alert(`Form with ID ${formId} deleted.`);
        // Refresh the list
        location.reload();
    }
}
