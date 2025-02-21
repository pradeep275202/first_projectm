// let deletedData = [];
// id = 0;

// function showinputValuse() {
//   id++;
//   // var input = document.getElementById("input").value;
//   // let values = document.getElementById("input").value;
//   // let task = values.trim();
//   // // console.log(task);
//   // // console.log(values)
//   // document.getElementById("input").value = "";
//   // let storeValuse = localStorage.getItem("userInput")
//   let a = localStorage.setItem("name", input);
//   // let stredValuse=localStorage.getItem("input")

//   console.log(input);

//   // var inputValuse = input.value;
//   // console.log(input)

//   let newRow = document.createElement("tr");
//   let newCell = document.createElement("td");

//   newCell.textContent = input;
//   newCell.style.border = "1px solid black";
//   newCell.style.width = "500px";
//   // newCell.style.margin ="5px"
//   newRow.appendChild(newCell);
//   saveDAta()

//   let select = document.getElementById("Table_container");
//   let button = document.createElement("button");
//   button.innerText = "Delete";
//   button.style.float = "right";
//   button.style.backgroundColor = "red";
//   button.style.color = "";
//   console.log(a,id)

//   button.addEventListener("click", function () {
//     // localStorage.removeItem("name");

//     newRow.remove();

//   });
//   // saveDAta()
//   newCell.append(button);
//   // newCell.remove()

//   document.getElementById("Table_container").appendChild(newRow);
//   // document.getElementById("input").value = "";
// }

// function saveDAta() {
//   localStorage.setItem("data", Table_container.innerHTML);
//   showDATA()
// }
// saveDAta()
// function showDATA() {
//   Table_container.innerHTML = localStorage.getItem("data");
// }
// showDATA();

// // window.onload = function() {
// //   loadTasks();
// // };

// addEventListener('click',function(){
//   localStorage.removeItem('yourKey');

// })

// 

// Function to add input values to the table and save in localStorage
// function showInputValues() {
//   let input = document.getElementById("input").value;

//   if (input === "") {
//     alert("Please fill the input value");
//   } else {
//     // Clear the input field after getting the value
//     document.getElementById("input").value = "";

//     // Retrieve existing table data from localStorage
//     let storedData = JSON.parse(localStorage.getItem("tableData")) || [];

//     // Add the new input to the stored data
//     storedData.push(input);

//     // Save the updated table data back to localStorage
//     localStorage.setItem("tableData", JSON.stringify(storedData));

//     // Render the updated table
//     renderTable();
//   }
// }

// // Function to render the table from localStorage data
// function renderTable() {
//   const tableContainer = document.getElementById("Table_container");
  
//   // Clear existing rows before rendering new ones
//   tableContainer.innerHTML = "";

//   // Get the table data from localStorage
//   let storedData = JSON.parse(localStorage.getItem("tableData")) || [];

//   // Loop through the stored data and create rows dynamically
//   storedData.forEach((inputValue, index) => {
//     let newRow = document.createElement("tr");

//     let cell1 = document.createElement("td");
//     cell1.style.border = "1px solid black";
//     cell1.textContent = inputValue;

//     let button = document.createElement("button");
//     button.innerText = "Delete";
//     button.style.float = "right";
//     button.style.backgroundColor = "red";

//     // Add the new row to the table container
//     tableContainer.appendChild(newRow);
//     newRow.appendChild(cell1);
//     cell1.append(button);

//     // Style the row
//     newRow.style.backgroundColor = "pink";
//     newRow.style.width = "100%";

//     // Add event listener to the delete button
//     button.addEventListener("click", function () {
//       // Remove the current row from the table
//       newRow.remove();

//       // Remove the corresponding value from localStorage
//       storedData.splice(index, 1);
//       localStorage.setItem("tableData", JSON.stringify(storedData));
//     });
//   });
// }

// // Call renderTable when the page loads to populate the table
// window.onload = renderTable;

// // Add event listener to the "Add" button (showInputValues function)
// document.getElementById("addButton").addEventListener("click", showInputValues);


// Function to show input values and save them in localStorage
function showInputValues() {
  let input = document.getElementById("input").value;

  if (input === "") {
    alert("Please fill the input value");
  } else {
    console.log(input);

    // Trim the input value and clear the input field
    let values = document.getElementById("input").value;
    let task = values.trim();
    document.getElementById("input").value = "";

    // Get the current stored data from localStorage
    let storedData = JSON.parse(localStorage.getItem("user-input-values")) || [];

    // Add the new task to the stored data
    storedData.push(task);

    // Save the updated data back to localStorage
    localStorage.setItem("user-input-values", JSON.stringify(storedData));

    // Render the updated table
    renderTable();
  }
}

// Function to render the table and display saved tasks from localStorage
function renderTable() {
  let textContentArea = document.getElementById("Table_container");
  textContentArea.innerHTML = ""; // Clear existing table rows

  // Get the tasks from localStorage
  let storedData = JSON.parse(localStorage.getItem("user-input-values")) || [];

  // Loop through each stored task and create a new row
  storedData.forEach((task, index) => {
    let newRow = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.style.border = "1px solid black";
    cell1.textContent = task;

    // Create a delete button for each row
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.style.float = "right";
    button.style.backgroundColor = "red";

    // Add the new row to the table container
    textContentArea.appendChild(newRow);
    newRow.appendChild(cell1);
    cell1.append(button);

    // Style the row
    newRow.style.backgroundColor = "pink";
    newRow.style.width = "100%";

    // Add event listener to the delete button
    button.addEventListener("click", function () {
      // Remove the task from the table
      newRow.remove();

      // Remove the task from the stored data in localStorage
      storedData.splice(index, 1);
      localStorage.setItem("user-input-values", JSON.stringify(storedData));
    });
  });
}

// Call renderTable on page load to populate the table with stored tasks
window.onload = renderTable;

// Add event listener to the "Add" button to trigger the showInputValues function
document.getElementById("addButton").addEventListener("click", showInputValues);

