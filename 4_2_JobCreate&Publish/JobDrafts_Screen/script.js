function editDraft(draftId) {
    // Simulate editing a draft
    alert(`Editing draft with ID: ${draftId}`);
    // Redirect to the job creation screen with draft details pre-filled
    // In a real application, this would involve fetching the draft details and passing them to the form
    window.location.href = `job_creation.html?draftId=${draftId}`;
}

function deleteDraft(draftId) {
    // Confirm deletion
    if (confirm('Are you sure you want to delete this draft?')) {
        // Simulate deletion of a draft
        alert(`Draft with ID: ${draftId} has been deleted.`);
        // In a real application, you would also remove the draft from the database
        removeDraftRow(draftId);
    }
}

function removeDraftRow(draftId) {
    // Example function to remove a row from the table
    const table = document.getElementById('draftsTable').getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        if (table.rows[i].getAttribute('data-draft-id') === draftId) {
            table.deleteRow(i);
            break;
        }
    }
}
