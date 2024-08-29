document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;

    // Simulate email verification process (you would typically verify with the server here)
    const isEmailValid = verifyEmail(email); // Placeholder function to simulate verification

    if (isEmailValid) {
        alert('Email verified. You can now reset your password.');
        document.getElementById('emailForm').style.display = 'none';
        document.getElementById('resetForm').style.display = 'block';
    } else {
        alert('Email not found. Please enter a valid email address.');
    }
});

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
    window.location.href = '/4_1_User_login/login/log_in.html';
});

function verifyEmail(email) {
    // This function should ideally make an AJAX call to the server to verify the email
    // For simulation purposes, we'll assume any non-empty email is valid
    return email !== '';
}
