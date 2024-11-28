// 2. **Frequency Calculation:**
//    - Implement a function `frequency(a)` that:
//      - Takes an array `a` as input.
//      - Returns an object where each key is a unique integer from the array and its value is the frequency of that integer in the array.

function frequency(a) {
    let arr = a;
    var obj = {
        key: 0,
        value: 0
    }
    const hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        hashMap.set(arr[i], hashMap.get(arr[i]) + 1 || 1);
    }

    let ans = {}
    for (const [key, value] of hashMap.entries()) {
        console.log(`The key is ${key} and value is ${value}`);
        ans[key] = value;
    }
    console.log(ans);
}
frequency([2, 3, 3, 4, 5, 5, 5]);



// let input = prompt("Enter a list of items separated by commas:");
// let array = input.split(",");

// console.log(array);
// console.log(frequency(array));