document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the Update Status button
    document.getElementById('updateStatusButton').addEventListener('click', function() {
        // Open the Update Status screen
        openUpdateStatusScreen();
    });

    // Event listener for the Send Message button
    document.getElementById('sendMessageButton').addEventListener('click', function() {
        // Open the Compose Message screen
        openComposeMessageScreen();
    });
});

// Function to open the Update Status screen
function openUpdateStatusScreen() {
    // Example action: Redirect to the Update Status page
    window.location.href = 'update-status.html'; // Update this URL to the actual path of the Update Status screen
}

// Function to open the Compose Message screen
function openComposeMessageScreen() {
    // Example action: Redirect to the Compose Message page
    window.location.href = 'compose-message.html'; // Update this URL to the actual path of the Compose Message screen
}
