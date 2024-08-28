document.getElementById('recoveryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;

    // Validate Email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate sending a recovery email
    alert('A password recovery email has been sent to ' + email + '.');
    // Here, you would typically send the data to the server for processing
    // and redirect the user to a confirmation page or back to login.
    window.location.href = 'login.html';
});
