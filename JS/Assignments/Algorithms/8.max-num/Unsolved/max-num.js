// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
const arr = [3, 1, 17, 5, 6,];
console.log(maxNum(arr));