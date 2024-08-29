document.getElementById('rescheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const newDate = document.getElementById('newDate').value;
    const newTime = document.getElementById('newTime').value;

    // Validate date and time
    if (!newDate || !newTime) {
        alert('Please select both date and time.');
        return;
    }

    // Simulate rescheduling process
    alert('Interview has been rescheduled successfully!');
    // Here, you would typically send the data to the server for processing
    // and redirect the user to the Interview Details page or other relevant page.
    window.location.href = 'interview-details.html'; // Redirect to Interview Details page
});
