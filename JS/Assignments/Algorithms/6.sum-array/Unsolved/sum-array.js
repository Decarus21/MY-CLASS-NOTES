// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
   let total=0;
   for (let i = 0; i < arr.length; i++){
    total += arr[i];
   }
   return total;
};
const arr = [3, 1, 5, 6];
console.log(sumArray(arr));
