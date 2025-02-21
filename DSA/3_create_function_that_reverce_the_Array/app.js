let arr = [1, 3, 4, 5, 6, 7, 8, 9];
let reverce = [];
function reverceArray() {
  for (let i = arr.length-1; (i >= 0); i--) {
    console.log(i);
    reverce.push(arr[i]);
  }
  console.log(reverce);
}

reverceArray();
