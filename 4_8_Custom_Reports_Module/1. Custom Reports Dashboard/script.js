document.addEventListener('DOMContentLoaded', function() {
    // Handle Create New Report button click
    document.getElementById('createNewReport').addEventListener('click', function() {
        window.location.href = 'create-report.html'; // Redirect to Create Report screen
    });

    // Handle View, Edit, Delete, Export button clicks
    document.querySelectorAll('#reportsTable .view').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'report-details.html'; // Redirect to Report Details screen
        });
    });

    document.querySelectorAll('#reportsTable .edit').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'edit-report.html'; // Redirect to Edit Report screen
        });
    });

    document.querySelectorAll('#reportsTable .delete').forEach(button => {
        button.addEventListener('click', function() {
            // Confirm and delete the report (Placeholder action)
            if (confirm('Are you sure you want to delete this report?')) {
                alert('Report deleted successfully!');
                // Add actual deletion logic here
            }
        });
    });

    document.querySelectorAll('#reportsTable .export').forEach(button => {
        button.addEventListener('click', function() {
            // Export functionality (Placeholder action)
            alert('Exporting report...');
            // Add actual export logic here
        });
    });
});
