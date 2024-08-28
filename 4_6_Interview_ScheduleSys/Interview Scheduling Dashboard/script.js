// Add the following to interview-dashboard.js to handle interactions on the Interview Scheduling Dashboard:

document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('scheduleNewInterview').addEventListener('click', function() {
        // Action to open the Interview Scheduling screen
        window.location.href = 'interview-scheduling.html';
    });

    document.querySelectorAll('.view').forEach(button => {
        button.addEventListener('click', function() {
            viewInterview(this);
        });
    });

    document.querySelectorAll('.reschedule').forEach(button => {
        button.addEventListener('click', function() {
            rescheduleInterview(this);
        });
    });

    document.querySelectorAll('.cancel').forEach(button => {
        button.addEventListener('click', function() {
            cancelInterview(this);
        });
    });
}

function viewInterview(button) {
    const row = button.closest('tr');
    // Simulate viewing interview details
    alert('Viewing interview details for: ' + row.cells[0].innerText);
    // Optionally, open the Interview Details screen
    // window.location.href = 'interview-details.html';
}

function rescheduleInterview(button) {
    const row = button.closest('tr');
    // Simulate rescheduling interview
    alert('Rescheduling interview for: ' + row.cells[0].innerText);
    // Optionally, open the Reschedule Interview screen
    // window.location.href = 'reschedule-interview.html';
}

function cancelInterview(button) {
    const row = button.closest('tr');
    // Simulate canceling interview
    if (confirm('Are you sure you want to cancel the interview for: ' + row.cells[0].innerText + '?')) {
        row.remove();
        alert('Interview canceled.');
    }
}
