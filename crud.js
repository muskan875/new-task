let selectedRow = null;

function onFormSubmit() {
    event.preventDefault();
    let formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
   // resetForm();
//    document.getElementById('inputName').value = "";
//     document.getElementById('inputAge').value = "";
    
}

function readFormData() {
    let formData = {};
    formData["inputName"] = document.getElementById("inputName").value;
    formData["inputAge"] = document.getElementById("inputAge").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.inputName;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.inputAge;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button onclick='onEdit(this)' class='btn btn-primary me-3'>Edit</button>  <button onclick='onDelete(this)' class='btn btn-danger'>Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('inputName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('inputAge').value = selectedRow.cells[1].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.inputName;
    selectedRow.cells[1].innerHTML = formData.inputAge;
}

function onDelete(td) {
    if (confirm("Do you want to delete?" )) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
}


// function resetForm() {
//     document.getElementById("form_submit").reset();
// }