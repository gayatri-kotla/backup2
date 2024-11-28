// **Array Generation:**
//    - Implement a function `generateArray(length)` that:
//      - Takes an integer `length` as input.
//      - Returns an array of the specified length.
//  - Each element in the array is a random integer between 0 and 9 (inclusive)

function generateArray(length) {
    let arr = new Array(length);
    for (let i = 0; i <= arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 10) + 1;
    }
    return arr;
}

var length = prompt("enter length");
const newArr = generateArray(length)
console.log(newArr);