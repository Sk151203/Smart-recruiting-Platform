document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate Password length
    if (newPassword.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Validate Password match
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Simulate password reset
    alert('Your password has been reset successfully!');
    // Here, you would typically send the data to the server for processing
    // and redirect the user to the login page.
    window.location.href = 'login.html';
});
