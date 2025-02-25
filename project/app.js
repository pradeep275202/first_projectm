document.getElementById("openFormButton").onclick = function () {
  document.getElementById("popupForm").style.display = "block";
};

document.getElementById("closeFormButton").onclick = function () {
  document.getElementById("popupForm").style.display = "none";
};

var id = 0;
var isEditMode = false;
var editRowIndex = null;

function storeInput() {
  var firstname = document.getElementById("first_name");
  var second_name = document.getElementById("second_name");
  var Father_name = document.getElementById("Father_name");
  var Adress = document.getElementById("adress");
  var Gender = document.getElementById("gender");
  var email = document.getElementById("email");
  var Mobile = document.getElementById("mobile_no");

  var value1 = firstname.value;
  var value2 = second_name.value;
  var value3 = Father_name.value;
  var value4 = Adress.value;
  var value5 = Gender.value;
  var value6 = email.value;
  var value7 = Mobile.value;

  // if (
  //   !firstname.value ||
  //   !second_name.value ||
  //   !Father_name.value ||
  //   !Adress.value ||
  //   !Gender.value ||
  //   !email.value ||
  //   !Mobile.value
  // ) {
  //   alert("Please fill in all fields!");
  //   return;
  // }

  if (
    !firstname.value ||
    !second_name.value ||
    !Father_name.value ||
    !Adress.value ||
    !Gender.value ||
    !email.value ||
    !Mobile.value
  ) {
    alert("Please fill in all fields!");
    return;
  }

  if (isEditMode) {
    var displayTable = document.getElementById("store");
    var row = displayTable.rows[editRowIndex];
    row.cells[1].innerHTML = value1;
    row.cells[2].innerHTML = value2;
    row.cells[3].innerHTML = value3;
    row.cells[4].innerHTML = value4;
    row.cells[5].innerHTML = value5;
    row.cells[6].innerHTML = value6;
    row.cells[7].innerHTML = value7;

    isEditMode = false;
    editRowIndex = null;
    document.getElementById("popupForm").style.display = "none";
  } else {
    id++;
    var inputValuse = {
      id,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
    };

    var displayTable = document.getElementById("store");
    var newRow = displayTable.insertRow(id);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);

    cell1.innerHTML = id;
    cell2.innerHTML = value1;
    cell3.innerHTML = value2;
    cell4.innerHTML = value3;
    cell5.innerHTML = value4;
    cell6.innerHTML = value5;
    cell7.innerHTML = value6;
    cell8.innerHTML = value7;

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
      isEditMode = true;
      editRowIndex = newRow.rowIndex;

      // document.getElementById("first_name").value = value1;
      // document.getElementById("second_name").value = value2;
      // document.getElementById("Father_name").value = value3;
      // document.getElementById("adress").value = value4;
      // document.getElementById("gender").value = value5;
      // document.getElementById("email").value = value6;
      // document.getElementById("mobile_no").value = value7;

      document.getElementById("first_name").value = value1;
      document.getElementById("second_name").value = value2;
      document.getElementById("Father_name").value = value3;
      document.getElementById("adress").value = value4;
      document.getElementById("gender").value = value5;
      document.getElementById("email").value = value6;
      document.getElementById("mobile_no").value = value7;

      document.getElementById("popupForm").style.display = "block";
    };

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
      displayTable.deleteRow(newRow.rowIndex);
    };

    cell9.appendChild(editButton);
    cell9.appendChild(deleteButton);
  }

  firstname.value = "";
  second_name.value = "";
  Father_name.value = "";
  Adress.value = "";
  Gender.value = "";
  email.value = "";
  Mobile.value = "";
}
