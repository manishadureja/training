var selectRow = null;
function onFormSubmit(){
    var grocery = readInput();
    if(selectRow == null){
        displayRecords(grocery); 
    }else{
        update(grocery);
    }
    resetForm();
}

function readInput(){
    var groceryItem = document.getElementById("groceryitemid").value;
    return groceryItem;
}

function displayRecords(grocery){
    var table= document.getElementById("groceryList").getElementsByTagName('tbody')[0];
    var groceries = table.insertRow(table.length);
    groceryCell1 = groceries.insertCell(0);
    groceryCell1.innerHTML = grocery;
    groceryCell2 = groceries.insertCell(1);
    groceryCell2.innerHTML=`<button type='button' onClick="onEdit(this)">Edit</button>
                            <button type='button' onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td){
    selectRow = td.parentElement.parentElement;
    document.getElementById("groceryitemid").value = selectRow.cells[0].innerHTML;

}

function update(data){
    selectRow.cells[0].innerHTML = data;
}
function onDelete(td){
   if(confirm('Delete this record?')){
       row=td.parentElement.parentElement;
       document.getElementById("groceryList").deleteRow(row.rowIndex);
       resetForm();
   }
}

function resetForm(){
    document.getElementById("groceryitemid").value="";
    selectRow=null;
}