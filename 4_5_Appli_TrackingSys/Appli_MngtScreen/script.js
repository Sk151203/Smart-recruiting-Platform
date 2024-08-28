// Update your scripts.js to handle dynamic content and interactions:

document.addEventListener('DOMContentLoaded', function() {
    loadJobTitles();
    loadApplications();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('applyFilters').addEventListener('click', function() {
        loadApplications();
    });
}

function loadJobTitles() {
    const jobTitleDropdown = document.getElementById('jobTitle');
    // Simulate fetching job titles
    const jobTitles = ['Software Engineer', 'Data Analyst', 'Project Manager'];

    jobTitles.forEach(title => {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = title;
        jobTitleDropdown.appendChild(option);
    });
}

function loadApplications() {
    const jobTitle = document.getElementById('jobTitle').value;
    const status = document.getElementById('status').value;
    const dateRange = document.getElementById('dateRange').value;

    // Simulate fetching filtered applications
    const applications = getFilteredApplications(jobTitle, status, dateRange);

    const applicationsTable = document.getElementById('applicationsListTable').getElementsByTagName('tbody')[0];
    applicationsTable.innerHTML = ''; // Clear existing rows

    applications.forEach(app => {
        const row = applicationsTable.insertRow();

        const cellName = row.insertCell(0);
        const cellJobTitle = row.insertCell(1);
        const cellStatus = row.insertCell(2);
        const cellDate = row.insertCell(3);
        const cellActions = row.insertCell(4);

        cellName.textContent = app.name;
        cellJobTitle.textContent = app.jobTitle;
        cellStatus.textContent = app.status;
        cellDate.textContent = app.dateApplied;

        const viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.addEventListener('click', function() {
            // Logic to view application details
            window.location.href = 'application_details.html'; // Redirect to Application Details screen
        });

        const nextStageButton = document.createElement('button');
        nextStageButton.textContent = 'Move to Next Stage';
        nextStageButton.addEventListener('click', function() {
            // Logic to move application to the next stage
        });

        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Reject';
        rejectButton.addEventListener('click', function() {
            // Logic to reject application
        });

        cellActions.appendChild(viewButton);
        cellActions.appendChild(nextStageButton);
        cellActions.appendChild(rejectButton);
    });
}

function getFilteredApplications(jobTitle, status, dateRange) {
    // Simulate fetching filtered applications
    return [
        { name: 'John Doe', jobTitle: 'Software Engineer', status: 'In Review', dateApplied: '2024-08-20' },
        { name: 'Jane Smith', jobTitle: 'Data Analyst', status: 'Applied', dateApplied: '2024-08-22' }
    ];
}
