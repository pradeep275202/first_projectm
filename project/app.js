// document.getElementById("openFormButton").onclick = function () {
//   document.getElementById("popupForm").style.display = "block";
// };

// document.getElementById("closeFormButton").onclick = function () {
//   document.getElementById("popupForm").style.display = "none";
// };
// function openForm() {
//   document.getElementById("myForm").style.display = "block";

//   // Attach the onclick event handler after the form is opened
//   document.getElementById("myButton").onclick = function () {
//     console.log("Button clicked!");
//   };
// }
// document.getElementById("openFormButton").onclick = function () {
//   document.getElementById("formContainer").style.display = "block";
// };

// document.getElementById("closeFormButton").onclick = function () {
//   document.getElementById("formContainer").style.display = "none";
// };

document.getElementById("openFormButton").onclick = function () {
  document.getElementById("popupForm").style.display = "block";
};

document.getElementById("closeFormButton").onclick = function () {
  document.getElementById("popupForm").style.display = "none";
};
var id = 1;
function storeInput() {
  var inputArr = [];
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

  if (
    !firstname ||
    !second_name ||
    !Father_name ||
    !Adress ||
    !Gender ||
    !email ||
    !Mobile
  ) {
    alert("Please fill in all fields!");
    return;
  }
  id++;
  inputArr.push(inputValuse);
  console.log("this is a input valuse", inputArr);

  // function showInTable() {
  //   document.getElementById("first_valus").innerHTML = inputValuse.id;
  //   document.getElementById("second_valuse").innerHTML = inputValuse.value1;
  //   document.getElementById("third_valuse").innerHTML = inputValuse.value2;
  //   document.getElementById("fourth_valuse").innerHTML = inputValuse.value3;
  //   document.getElementById("fifth_valuse").innerHTML = inputValuse.value4;
  //   document.getElementById("sixth_valuse").innerHTML = inputValuse.value5;
  //   document.getElementById("seventh_valuse").innerHTML = inputValuse.value6;
  //   document.getElementById("eight_valuse").innerHTML = inputValuse.value7;
  // }
  // showInTable();

  var displayTable = document.getElementById("store")
var newRow =displayTable.insertRow(id);
var cell1 =newRow.insertCell(0)
var cell2 =newRow.insertCell(1)
var cell3 =newRow.insertCell(2)
var cell4 =newRow.insertCell(3)
var cell5 =newRow.insertCell(4)
var cell6 =newRow.insertCell(5)
var cell7 =newRow.insertCell(6)
var cell8 =newRow.insertCell(7)
const button = document.createElement('button');
button.textContent = 'Click Me';


cell1.innerHTML = id;
cell2.innerHTML =value1;
cell3.innerHTML = value2;
cell4.innerHTML = value3;
cell5.innerHTML=value4;
cell6.innerHTML = value5;
cell7.innerHTML =value6;
cell8.innerHTML =value7

}






