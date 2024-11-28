// e) Write a function that groups an array of objects by a specified property, returning an object where the keys are unique property values and the values are arrays of corresponding objects.

// Example:
// Input: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 30 }]
// Output: { '30': [{ name: 'John', age: 30 }, { name: 'Bob', age: 30 }], '25': [{ name: 'Jane', age: 25 }] }


function objPropertyGrouping(objArr) {
    let resObj = {};
    // new array is created on every iteration 
    for (let obj of objArr) {
        let age = obj.age
        if (resObj[age] && resObj[age].length > 0) {
            resObj[age].push(obj);
        } else {
            let valArr = [];
            valArr.push(obj);
            resObj[age] = valArr;
        }
    }
    return resObj;

}
console.log(objPropertyGrouping([{ "name": "pooja", "age": 20 }, { "name": "hegde", "age": 25 }, { "name": "ram", "age": 20 }, { name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Rohan', age: 7 }]));

// console.log(res);