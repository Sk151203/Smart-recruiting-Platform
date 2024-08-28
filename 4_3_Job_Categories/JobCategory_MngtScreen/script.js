function addCategory() {
    const categoryType = document.getElementById('categoryType').value;
    const categoryName = document.getElementById('categoryName').value;

    if (categoryType && categoryName) {
        const table = document.getElementById('categoriesTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.setAttribute('data-category-id', Date.now().toString());

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = categoryType;
        cell2.textContent = categoryName;
        cell3.innerHTML = `<button onclick="editCategory('${newRow.getAttribute('data-category-id')}')">Edit</button> 
                           <button onclick="deleteCategory('${newRow.getAttribute('data-category-id')}')">Delete</button>`;

        // Clear input fields
        document.getElementById('categoryType').value = '';
        document.getElementById('categoryName').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

function editCategory(categoryId) {
    const row = document.querySelector(`[data-category-id='${categoryId}']`);
    const categoryType = row.cells[0].textContent;
    const categoryName = row.cells[1].textContent;

    // Populate modal fields with existing values
    document.getElementById('editCategoryType').value = categoryType;
    document.getElementById('editCategoryName').value = categoryName;

    // Show modal
    document.getElementById('editModal').style.display = 'block';

    // Save changes
    document.getElementById('saveCategoryButton').onclick = function() {
        saveCategory(categoryId);
    };
}

function saveCategory(categoryId) {
    const row = document.querySelector(`[data-category-id='${categoryId}']`);
    const categoryType = document.getElementById('editCategoryType').value;
    const categoryName = document.getElementById('editCategoryName').value;

    if (categoryType && categoryName) {
        row.cells[0].textContent = categoryType;
        row.cells[1].textContent = categoryName;

        // Hide modal
        closeModal();
    } else {
        alert('Please fill out all fields.');
    }
}

function deleteCategory(categoryId) {
    if (confirm('Are you sure you want to delete this category?')) {
        const row = document.querySelector(`[data-category-id='${categoryId}']`);
        row.parentElement.removeChild(row);
    }
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}
