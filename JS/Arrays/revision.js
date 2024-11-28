// e) Write a function that groups an array of objects by a specified property, returning an object where the keys are unique property values and the values are arrays of corresponding objects.

// Example:
// Input: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 30 }]
// Output: { '30': [{ name: 'John', age: 30 }, { name: 'Bob', age: 30 }], '25': [{ name: 'Jane', age: 25 }] }


function groupObjects(objArr) {
    let resObj = {};
    for (let obj of objArr) {
        // console.log(obj);
        let age = obj.age;
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
const res = groupObjects([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 30 }]);
console.log(res);














function uniqueKeys(obj) {
    let resObj = {};
    for (let element of obj) {
        for (let entry of Object.entries(element)) {
            let key = entry[0];
            let value = entry[1];
            console.log(value);
            if (resObj[key] && resObj[key].length > 0) {
                resObj[key] = value;
            } else {
                let valArr = [];
                resObj[key] = valArr.push(value);
            }
        }
    }
    return resObj;

}

// const res = uniqueKeys([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 30 }]);
// console.log(res);