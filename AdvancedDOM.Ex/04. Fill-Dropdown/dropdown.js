function addItem() {
    
    let list = document.getElementById('menu');
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    //create option
    const newOption = document.createElement("option");
    newOption.textContent = itemText.value;
    newOption.value = itemValue.value;
    //add option
    list.appendChild(newOption);
    //clear iput fields
    itemText.value = '';
    itemValue.value = '';
}