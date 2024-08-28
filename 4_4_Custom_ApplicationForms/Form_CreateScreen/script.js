document.addEventListener('DOMContentLoaded', function() {
    populateJobDropdown();

    const form = document.getElementById('formCreationForm');
    const addFieldButton = document.getElementById('addFieldButton');
    const addFieldModal = document.getElementById('addFieldModal');
    const addFieldToFormButton = document.getElementById('addFieldToFormButton');
    const fieldListTable = document.getElementById('fieldListTable').getElementsByTagName('tbody')[0];

    addFieldButton.addEventListener('click', function() {
        addFieldModal.style.display = 'block';
    });

    document.querySelector('.modal .close').addEventListener('click', function() {
        addFieldModal.style.display = 'none';
    });

    addFieldToFormButton.addEventListener('click', function() {
        const fieldName = document.getElementById('fieldName').value;
        const fieldType = document.getElementById('fieldType').value;

        if (fieldName && fieldType) {
            const row = fieldListTable.insertRow();

            const cellName = row.insertCell(0);
            const cellType = row.insertCell(1);
            const cellActions = row.insertCell(2);

            cellName.textContent = fieldName;
            cellType.textContent = fieldType;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function() {
                // Logic to edit the field
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                row.remove();
            });

            cellActions.appendChild(editButton);
            cellActions.appendChild(deleteButton);

            addFieldModal.style.display = 'none';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Logic to save the form
        alert('Form saved successfully!');
        window.location.href = 'application_forms_management.html'; // Redirect after saving
    });
});

function populateJobDropdown() {
    const jobs = getJobPostings(); // Simulate fetching job postings
    const dropdown = document.getElementById('associatedJob');

    jobs.forEach(job => {
        const option = document.createElement('option');
        option.value = job.id;
        option.textContent = job.title;
        dropdown.appendChild(option);
    });
}

function getJobPostings() {
    // Simulate fetching job postings from the backend or database
    return [
        { id: 1, title: 'Software Engineer' },
        { id: 2, title: 'Data Analyst' }
    ];
}
