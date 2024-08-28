document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate Email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate Password length
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Validate Password match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Simulate account creation
    alert('Your account has been created successfully!');
    // Here, you would typically send the data to the server for processing
    // and redirect the user to the login page.
    window.location.href = 'login.html';
});
