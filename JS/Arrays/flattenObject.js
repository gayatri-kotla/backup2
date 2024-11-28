// c) Given an object with nested properties, write a function to flatten it, preserving the keys and values in a single-level object.

// Example:
// Input: { name: 'John', details: { age: 30, city: 'New York' } }
// Output: { name: 'John', 'details.age': 30, 'details.city': 'New York' }

let resObj = {};
function flattenObject(obj, parent) {


    for (let entry of Object.entries(obj)) {

        let key = entry[0];
        let val = entry[1];
        console.log(typeof val)
        if (typeof val == "object") {
            flattenObject(val, parent + "." + key);
        }
        else {
            resObj[parent + "." + key] = val
        }
    }

    return resObj;

}


// function isObjectExisting(val, resObj) {
//     if (typeof (val) == Object) {
//         return true;
//     }
//     isObjectExisting();
// }
const res = flattenObject({ name: 'John', details: { age: { abce: 30, country: 'New York' }, city: 'New York' } }, "user");
console.log(res);