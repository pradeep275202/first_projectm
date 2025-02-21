let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
function sumNumber() {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumNumber();
