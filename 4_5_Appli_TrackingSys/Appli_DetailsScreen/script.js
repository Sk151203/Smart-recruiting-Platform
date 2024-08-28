// Update your scripts.js to handle interactions on the Application Details screen:

document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('saveStatus').addEventListener('click', function() {
        const newStatus = document.getElementById('statusDropdown').value;
        saveStatus(newStatus);
    });

    document.getElementById('saveNotes').addEventListener('click', function() {
        const notes = document.getElementById('notesTextarea').value;
        saveNotes(notes);
    });
}

function saveStatus(newStatus) {
    // Simulate saving status
    console.log('New status saved:', newStatus);
    // Update UI with new status
    document.getElementById('currentStatus').textContent = newStatus;
}

function saveNotes(notes) {
    // Simulate saving notes
    console.log('Notes saved:', notes);
    // Optionally, clear the textarea or provide feedback
}
