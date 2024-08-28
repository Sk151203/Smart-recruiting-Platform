document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();

    document.getElementById('viewAllApplicationsButton').addEventListener('click', function() {
        window.location.href = 'applications_management.html'; // Redirect to Applications Management screen
    });
});

function updateDashboard() {
    const jobOpeningsCount = document.getElementById('jobOpeningsCount');
    const applicationsCount = document.getElementById('applicationsCount');
    const recentApplicationsTable = document.getElementById('recentApplicationsTable').getElementsByTagName('tbody')[0];

    // Simulate fetching data from the backend or database
    const jobOpenings = getJobOpeningsCount();
    const applications = getApplicationsCount();
    const recentApplications = getRecentApplications();

    jobOpeningsCount.textContent = jobOpenings;
    applicationsCount.textContent = applications;

    recentApplications.forEach(app => {
        const row = recentApplicationsTable.insertRow();

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

function getJobOpeningsCount() {
    // Simulate fetching job openings count
    return 10; // Example value
}

function getApplicationsCount() {
    // Simulate fetching applications count
    return 25; // Example value
}

function getRecentApplications() {
    // Simulate fetching recent applications
    return [
        { name: 'John Doe', jobTitle: 'Software Engineer', status: 'Under Review', dateApplied: '2024-08-20' },
        { name: 'Jane Smith', jobTitle: 'Data Analyst', status: 'Shortlisted', dateApplied: '2024-08-22' }
    ];
}
