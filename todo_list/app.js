function showinputValuse() {
  var input = document.getElementById("input");
  var inputValuse = input.value;
  console.log(inputValuse)
  
  var table = document.createElement("table")
  table.style.border ='1'
  var tr = document.createElement("tr")
  tr.innerText ="inputValuse"
  tr.appendChild(table)

}
