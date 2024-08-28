function viewJob(jobId) {
    // Simulate viewing a job
    alert(`Viewing job with ID: ${jobId}`);
    // Redirect to the job details page
    window.location.href = `job_details.html?jobId=${jobId}`;
}

function editJob(jobId) {
    // Simulate editing a published job
    alert(`Editing job with ID: ${jobId}`);
    // Redirect to the job creation screen with the published job details pre-filled
    window.location.href = `job_creation.html?jobId=${jobId}`;
}

function unpublishJob(jobId) {
    // Confirm unpublishing
    if (confirm('Are you sure you want to unpublish this job?')) {
        // Simulate unpublishing the job
        alert(`Job with ID: ${jobId} has been unpublished.`);
        // In a real application, this would also update the job's status in the database
        removePublishedJobRow(jobId);
    }
}

function removePublishedJobRow(jobId) {
    // Example function to remove a row from the table
    const table = document.getElementById('publishedJobsTable').getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        if (table.rows[i].getAttribute('data-job-id') === jobId) {
            table.deleteRow(i);
            break;
        }
    }
}
