function showinputValuse() {
  var input = document.getElementById("input").value;
  // let storeValuse = localStorage.getItem("userInput")
  let a=localStorage.setItem("name", input)
  // let stredValuse=localStorage.getItem("input")

  console.log(a)

  // var inputValuse = input.value;
  // console.log(input)
  
  let newRow =document.createElement('tr')
  let newCell =document.createElement('td')
 
  newCell.textContent=  input;
  newCell.style.border='1px solid black'
  newCell.style.width='100%'
  newRow.appendChild(newCell);
  
  let select=document.getElementById("Table_container")
  let button =document.createElement('button')
  button.innerText="Delete"
  button.style.float='right'
  newCell.append(button)
  newCell.remove()

  document.getElementById("Table_container").appendChild(newRow)

}

// const table = document.querySelector('.Table_container');

// table.addEventListener('click', (event) => {

//   if (event.target.newCell.contains('delete-button')) {

//     deleteCell(event); 

//   }

// });
