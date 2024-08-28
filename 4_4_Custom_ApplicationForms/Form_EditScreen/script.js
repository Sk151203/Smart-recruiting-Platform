/*Update your scripts.js to handle pre-filling details and modal interactions:
*/ 


document.addEventListener('DOMContentLoaded', function() {
    populateJobDropdown();
    loadFormDetails();

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

    document.getElementById('fieldType').addEventListener('change', function() {
        const fieldType = this.value;
        const fieldOptionsSection = document.getElementById('fieldOptionsSection');
        if (fieldType === 'dropdown' || fieldType === 'checkbox' || fieldType === 'radio') {
            fieldOptionsSection.style.display = 'block';
        } else {
            fieldOptionsSection.style.display = 'none';
        }
    });

    addFieldToFormButton.addEventListener('click', function() {
        const fieldName = document.getElementById('fieldName').value;
        const fieldType = document.getElementById('fieldType').value;
        const fieldOptions = document.getElementById('fieldOptions').value;

        if (fieldName && fieldType && (fieldType !== 'dropdown' && fieldType !== 'checkbox' && fieldType !== 'radio' || fieldOptions)) {
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
        } else {
            alert('Please fill out all required fields.');
        }
    });

    document.getElementById('formEditingForm').addEventListener('submit', function(event) {
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

function loadFormDetails() {
    // Simulate fetching form details
    const formDetails = {
        name: 'Application Form',
        jobId: 1,
        fields: [
            { name: 'Name', type: 'text', options: '' },
            { name: 'Experience', type: 'dropdown', options: 'Junior,Mid-level,Senior' }
        ]
    };

    document.getElementById('formName').value = formDetails.name;
    document.getElementById('associatedJob').value = formDetails.jobId;

    const fieldListTable = document.getElementById('fieldListTable').getElementsByTagName('tbody')[0];

    formDetails.fields.forEach(field => {
        const row = fieldListTable.insertRow();

        const cellName = row.insertCell(0);
        const cellType = row.insertCell(1);
        const cellActions = row.insertCell(2);

        cellName.textContent = field.name;
        cellType.textContent = field.type;

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
    });
}
