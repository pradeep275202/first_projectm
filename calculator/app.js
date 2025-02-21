// all valuse
var inputValuse= document.getElementById("inputBox")
var buttons = document.querySelectorAll("button")
console.log(buttons)

var butArray =Array.from(buttons)
var str=''
console.log(butArray)

butArray.forEach(function(btn){
          console.log(btn)
          btn.addEventListener('click',function(event){
                    str +=event.target.innerHTML
                    // str.style.fonts
                    
                    // console.log(str)
                    inputValuse.value= str;
                    // console.log(event.target.innerHTML)
          });
         
});
