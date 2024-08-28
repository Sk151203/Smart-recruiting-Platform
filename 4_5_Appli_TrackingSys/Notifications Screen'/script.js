document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    document.querySelectorAll('.markAsRead').forEach(button => {
        button.addEventListener('click', function() {
            markAsRead(this);
        });
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', function() {
            deleteNotification(this);
        });
    });
}

function markAsRead(button) {
    const row = button.closest('tr');
    // Simulate marking as read
    row.style.backgroundColor = '#e0e0e0'; // Light gray background for read notifications
    // Optionally, update UI or backend to reflect the read status
    console.log('Notification marked as read.');
}

function deleteNotification(button) {
    const row = button.closest('tr');
    // Simulate deleting notification
    row.remove();
    // Optionally, update backend to remove the notification
    console.log('Notification deleted.');
}
