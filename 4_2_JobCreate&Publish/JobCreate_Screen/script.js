document.getElementById('jobCreationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate application deadline date
    const applicationDeadline = document.getElementById('applicationDeadline').value;
    const today = new Date().toISOString().split('T')[0];

    if (applicationDeadline <= today) {
        alert('Application deadline must be a future date.');
        return;
    }

    // Additional validations can be done here if needed

    // Simulate job publishing
    alert('The job has been published successfully!');
    // Here, you would typically send the data to the server for processing
    // and redirect the user to another page.
});

function saveAsDraft() {
    // Simulate saving the job as a draft
    alert('The job has been saved as a draft!');
    // Here, you would typically save the draft data to the server
    // and allow the user to return to it later for editing.
}
