// a) Write a function that takes an object as input and returns a new object with all the keys and values swapped.

// Example:
// Input: { name: 'John', age: 30, gender: 'male' }
// Output: { 'John': 'name', '30': 'age', 'male': 'gender' }

function objectSwap(obj) {
    let resObj = {};
    // for (let val of Object.values(obj)) {
    //     resObj[val] = "";
    // }
    for (let key of Object.keys(obj)) {
        let val = obj[key];
        resObj[val] = key;
    }
    return resObj;
}
const res = objectSwap({ name: 'John', age: 30, gender: 'male' });

console.log(res);