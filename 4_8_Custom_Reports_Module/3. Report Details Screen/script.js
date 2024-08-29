document.addEventListener('DOMContentLoaded', function() {
    // Example data for demonstration
    const reportData = {
        name: 'Example Report',
        dateCreated: '2024-08-29',
        createdBy: 'John Doe',
        columns: ['Applicant Name', 'Date Applied', 'Status', 'Source'],
        rows: [
            ['Jane Smith', '2024-08-20', 'New', 'Job Board'],
            ['John Doe', '2024-08-21', 'In Progress', 'Referral']
        ]
    };

    // Populate report information
    document.getElementById('reportName').textContent = reportData.name;
    document.getElementById('dateCreated').textContent = reportData.dateCreated;
    document.getElementById('createdBy').textContent = reportData.createdBy;

    // Populate report data table
    const thead = document.querySelector('#reportDataTable thead tr');
    const tbody = document.querySelector('#reportDataTable tbody');

    // Create table headers
    reportData.columns.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column;
        thead.appendChild(th);
    });

    // Create table rows
    reportData.rows.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    // Add event listeners to buttons
    document.getElementById('editReport').addEventListener('click', function() {
        window.location.href = 'edit-report.html'; // Navigate to Edit Report screen
    });

    document.getElementById('deleteReport').addEventListener('click', function() {
        // Implement delete logic here
        alert('Report deleted!');
    });

    document.getElementById('exportReport').addEventListener('click', function() {
        // Implement export logic here
        alert('Report exported!');
    });
});
