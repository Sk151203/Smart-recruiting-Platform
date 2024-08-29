document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('updateStatusForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const newStatus = document.getElementById('newStatus').value;
        const notes = document.getElementById('notes').value;

        // Simple validation
        if (!newStatus) {
            alert('Please select a new status.');
            return;
        }

        // Example action: Simulate saving the status and updating the status history
        alert('Status updated successfully!');
        
        // Redirect or perform other actions after status update
        window.location.href = 'application-details.html'; // Redirect to the Application Details screen
    });
});
