document.getElementById('interviewMode').addEventListener('change', function() {
    const locationGroup = document.getElementById('locationGroup');
    if (this.value === 'in_person') {
        locationGroup.style.display = 'block';
    } else {
        locationGroup.style.display = 'none';
    }
});

document.getElementById('schedulingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    // Add your form submission logic here

    alert('Interview scheduled successfully!');
});
