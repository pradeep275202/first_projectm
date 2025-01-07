var inputValuse = document.getElementById("input")
var createTable =document.getElementById("Create_table")
var valueTable = createTable.value;
var value =inputValuse.value;
function showsInput(){

          var newRow =document.createElement("tr")
          var cell1 = document.createElement("td")
          cell1.textContent= value;
          newRow.appendChild(cell1);
          table.appendChild(newRow)
         


}