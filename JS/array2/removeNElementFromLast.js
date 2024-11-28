// g) Implement a function to remove the nth element from the end of an array, without modifying the original array.

// Example:
// Input: [1, 2, 3, 4, 5], n = 2
// Output: [1, 2, 3, 5] (The second element from the end, 4, is removed)

function removeNElementFromLast(arr, k) {
    // let resArr = [];
    // for (let i = )
    //     return resArr;
    arr.splice(arr.length - k, 1, 88);
    return arr
}
const res = removeNElementFromLast([1, 2, 3, 4, 5], 2);
console.log(res);