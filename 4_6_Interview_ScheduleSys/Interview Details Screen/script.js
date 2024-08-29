document.getElementById('rescheduleInterview').addEventListener('click', function() {
    // Redirect to the Reschedule Interview screen
    window.location.href = 'reschedule-interview.html';
});

document.getElementById('cancelInterview').addEventListener('click', function() {
    // Add functionality to cancel the interview
    alert('Interview cancelled!');
    // You might want to redirect or refresh the page
    window.location.href = 'interview-scheduling.html'; // Redirect back to the scheduling dashboard
});
