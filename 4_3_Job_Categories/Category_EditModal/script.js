document.getElementById('addCategoryButton').onclick = function() {
    addCategory();
};

function addCategory() {
    const categoryType = document.getElementById('categoryType').value;
    const categoryName = document.getElementById('categoryName').value;

    if (categoryType && categoryName) {
        const table = document.getElementById('categoriesTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const categoryId = new Date().getTime(); // Unique ID for the row

        newRow.setAttribute('data-category-id', categoryId);
        newRow.innerHTML = `
            <td>${categoryType}</td>
            <td>${categoryName}</td>
            <td>
                <button onclick="editCategory(${categoryId})">Edit</button>
                <button onclick="deleteCategory(${categoryId})">Delete</button>
            </td>
        `;

        // Clear the input fields
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

    document.getElementById('editCategoryType').value = categoryType;
    document.getElementById('editCategoryName').value = categoryName;

    document.getElementById('editModal').style.display = 'block';

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

        closeModal();
    } else {
        alert('Please fill out all fields.');
    }
}

function deleteCategory(categoryId) {
    const row = document.querySelector(`[data-category-id='${categoryId}']`);
    row.parentNode.removeChild(row);
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}
