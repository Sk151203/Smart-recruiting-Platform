document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const usernameEmail = document.getElementById('usernameEmail').value;
    const password = document.getElementById('password').value;

    // Validate Email format
    if (usernameEmail.includes('@')) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(usernameEmail)) {
            alert('Please enter a valid email address.');
            return;
        }
    }

    // Validate Password
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Here, you would typically send the data to the server for authentication.
    // For this example, let's just display a success message.
    alert('Login successful!');
    // Redirect to dashboard or other page
    window.location.href = 'dashboard.html';
});
