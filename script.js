let selectedRow = null;

function onFormSubmit(event) {
    event.preventDefault();
    var formData = readData();
    
    if (selectedRow === null) {
        insertData(formData);
    }
     else {
        updateRecord(formData);
    }
    resetForm();
}



function resetForm() {
    document.getElementById('fullName').value = "";
    document.getElementById('empCode').value = "";
    document.getElementById('email').value = "";
    selectedRow = null;
}

function insertData(data) {
    let Datas = document.getElementById('insertedData');
    let t = Datas.insertRow(Datas.rows.length);

    // let t= Datas.insertRow(Datas.rows.length);

    let c1 = t.insertCell(0);
    c1.innerHTML = data.fullName;

    let c2 = t.insertCell(1);
    c2.innerHTML = data.empCode;

    let c3 = t.insertCell(2);
    c3.innerHTML = data.email;

    let c4 = t.insertCell(3);
    c4.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                    <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

function readData() {
    let formData = {};
    formData['fullName'] = document.getElementById('fullName').value;
    formData['empCode'] = document.getElementById('empCode').value;
    formData['email'] = document.getElementById('email').value;
    return formData;
    
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('empCode').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML= formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.email;
}

function onDelete(td) {
   if(confirm('Are you sure to delete!!'))
   {
        row = td.parentElement.parentElement;
        document.getElementById("elist").deleteRow(row.rowIndex);
        resetForm();
   }
}

