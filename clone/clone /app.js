// function submit(){
//           document.getElementById("my_form").style.display="block"

//}
// function myFunction() {
//           document.getElementById("demo").style.p = "block";
//         }

document.getElementById("openFormButton").onclick = function () {
          document.getElementById("popupForm").style.display = "block";
        };
        
        // document.getElementById("closeFormButton").onclick = function () {
        //   document.getElementById("popupForm").style.display = "none";
        // };
        
        document.getElementById("closeFormButton").onclick = function() {
          document.getElementById("popupForm").style.display = "none";
        };
        
        // window.onclick = function(event) {
        //   if (event.target == document.getElementById("popupForm")) {
        //       document.getElementById("popupForm").style.display = "none";
        //   }
        // };
        
        
        // var arr = [
        //   {
        //     firstname: " ",
        //     Secondname: " ",
        //     fathername: " ",
        //     Address: " ",
        //     Gender: " ",
        //     Email: " ",
        //     mobile: " ",
        //   },
        // ];
        
        // this is code for get input value
        function storeInput() {
          var inputArray = [];
          var input1 = document.getElementById("input1");
          var input2 = document.getElementById("input2");
          var input3 = document.getElementById("input3");
          var input4 = document.getElementById("input4");
          var input5 = document.getElementById("male");
          var input6 = document.getElementById("female");
          var input7 = document.getElementById("input7");
          var input8 = document.getElementById("input8");
          // var gender1 = input5.value
          // console.log(gender1)
        
          var value1 = input1.value;
          var value2 = input2.value;
          var value3 = input3.value;
          var value4 = input4.value;
          var gender = checkGender();
          var value7 = input7.value;
          var value8 = input8.value;
          // console.log(gender,"this is a gendr")
        
          inputArray.push(value1, value2, value3, value4, gender, value7, value8);
          console.log(inputArray);
        
          // function getGender(){
        
          // var gender1 =input5.value
          // console.log(gender1)
          function checkGender() {
            if (document.getElementById("male").checked) return "Male";
            else return "Female";
          }
        }
        
        // for(var i=0;i<inputArray.length;i++){
        //   document.write(i)
        // }
        
        // for(var i=0;i<(inputArray.value).length;i++){
        //   console.log(i)
        // }
        
        function addstudent() {
          var first_name = document.sample.firstname.value;
          var Second_name = document.sample.second_name.value;
          var father_name = document.sample.farher_name.value;
        
          var Adress = document.sample.address.value;
          var gender = document.sample.registraion.value;
        
          var eemail_id = document.sample.email.value;
          var mobile_no = document.sample.mobile_no.value;
          var tr = document.createElement("tr");
          var td1 = tr.appendChild(document.createElement("td"));
          var td2 = tr.appendChild(document.createElement("td"));
          var td3 = tr.appendChild(document.createElement("td"));
          var td4 = tr.appendChild(document.createElement("td"));
          var td5 = tr.appendChild(document.createElement("td"));
          var td6 = tr.appendChild(document.createElement("td"));
          var td7 = tr.appendChild(document.createElement("td"));
          td1.innerHTML = first_name;
          td2.innerHTML = Second_name;
          td3.innerHTML = father_name;
          td4.innerHTML = Adress;
          td5.innerHTML = gender;
          td6.innerHTML = eemail_id;
          td7.innerHTML = mobile_no;
        
          document.getElementById("tbl").appendChild(tr);
        }
