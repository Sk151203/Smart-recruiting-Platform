document.addEventListener('DOMContentLoaded', function() {
    populateDropdowns();
});

function populateDropdowns() {
    // Simulating fetching categories from Job Categories Management Screen
    const departments = getCategories('Department');
    const locations = getCategories('Location');
    const employmentTypes = getCategories('Employment Type');

    populateDropdown('department', departments);
    populateDropdown('jobLocation', locations);
    populateDropdown('employmentType', employmentTypes);
}

function getCategories(type) {
    // This function simulates fetching categories based on the type
    // In a real application, this data would be fetched from a database or API
    const categories = {
        'Department': ['HR', 'IT', 'Marketing', 'Sales'],
        'Location': ['New York', 'San Francisco', 'Los Angeles', 'Chicago'],
        'Employment Type': ['Full-time', 'Part-time', 'Contract', 'Internship']
    };
    return categories[type] || [];
}

function populateDropdown(dropdownId, options) {
    const dropdown = document.getElementById(dropdownId);
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        dropdown.appendChild(opt);
    });
}

// Form validation and submission logic will go here
