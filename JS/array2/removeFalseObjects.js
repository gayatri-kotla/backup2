// g) Implement a function to remove all properties from an object that 
//have falsy values (e.g., null, undefined, false, 0, '').

// Example:
// Input: { name: 'John', age: 30, address: null, email: '', active: true }
// Output: { name: 'John', age: 30, active: true } (Properties with falsy values are removed)

function removeProperties(obj) {
    let resObj = {};
    for (let entry of Object.entries(obj)) {
        let val = entry[1];
        if (!val == null || !val == undefined || !val == false || !val == 0 || !val == '') {
            resObj[entry[0]] = val;
        }
    }
    return resObj;
}
const res = removeProperties({ name: 'John', age: 30, address: null, email: '', active: true, val: undefined, isboolean: false });
console.log(res);