// h) Given an object with nested arrays, write a function to flatten it into a single-level array, preserving the order of elements.

// Example:
// Input: { data: [1, 2, [3, [4, 5]], 6] }
// Output: [1, 2, 3, 4, 5, 6] (The nested arrays are flattened into a single-level array)


let resArr = [];
function flattenArray(arr) {
    for (let ele of arr) {
        console.log(ele)
        if (Array.isArray(ele)) {
            flattenArray(ele);
        } else {
            resArr.push(ele)
        }
    }
    return resArr;
}
const res = flattenArray([1, 2, [3, [4, 5]], 6]);
console.log(res);