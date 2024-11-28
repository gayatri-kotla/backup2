// i) Implement a function to sort an array of objects based on a specified property in ascending order.
// If two objects have the same value for the property, the original order should be preserved.

// Example:
// Input: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 35 }]
// Output: [{ name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]

function sortObjectOnProp(objArr) {
    let resObjArr = [];
    let prevAge = 0;
    // for (let obj of objArr) {
    //     let age = obj.age;
    //     // console.log(age);
    //     if (age > prevAge) {
    //         prevAge = age;
    //         console.log(obj)
    //         resObjArr.push(obj);
    //     }
    // }
    objArr.sort((a, b) => a.age - b.age);
    return objArr;
}

const res = sortObjectOnProp([{ name: 'John', age: 1 }, { name: 'Jane', age: 1 }, { name: 'Bob', age: 1 }, { name: 'John', age: 20 }, { name: 'Jane', age: 10 }, { name: 'Bob', age: 6 }]);
console.log(res);