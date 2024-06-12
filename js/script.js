/********************************add to list script************************************************* */
document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const clearItemsButton = document.getElementById('clearItemsButton');
    const itemList = document.getElementById('itemList');

    // Function to add a new item
    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText === '') {
            alert('Please enter an item.');
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');

        // Create a checkbox for the list item
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = () => {
            listItem.classList.toggle('completed');
        };

        // Create a span to hold the item text
        const itemSpan = document.createElement('span');
        itemSpan.textContent = itemText;

        // Create a delete button for the list item
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.classList.add('deleteButton');
        deleteButton.onclick = () => listItem.remove();

        // Append the checkbox and delete button to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(itemSpan);
        listItem.appendChild(deleteButton);

        // Append the list item to the item list
        itemList.appendChild(listItem);

        // Clear the input field
        itemInput.value = '';
    }

    // Add item when button is clicked
    addItemButton.addEventListener('click', addItem);

    // Allow pressing 'Enter' to add the item
    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });
     // Clear all items when the clear button is clicked
     clearItemsButton.addEventListener('click', () => {
        itemList.innerHTML = '';
    });
});
