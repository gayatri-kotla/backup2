// b) Implement a function to merge two objects, combining their properties. If a key exists in both objects, the value from the second object should overwrite the value from the first object.

// Example:
// Input: { name: 'John', age: 30 }, { age: 35, city: 'New York' }
// Output: { name: 'John', age: 35, city: 'New York' }
function mergeObjects(obj1, obj2) {
    let resObj = {};
    for (let entry of Object.entries(obj1)) {
        let key = entry[0];
        let value = entry[1];
        resObj[key] = value;
    }

    for (let entry of Object.entries(obj2)) {
        let key = entry[0];
        resObj[key] = entry[1];
        // if (resObj[key]) {
        //     resObj[key] = entry[1];
        // }
    }

    return resObj;
}
let res = mergeObjects({ name: 'John', age: 30 }, { age: 35, city: 'New York' });
console.log(res);