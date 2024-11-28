// 1. Array of Object Manipulation:a) Write a function that takes an array of objects with properties
// "name" and "children" and returns a flat array containing the names of all the descendants.
//Example:Input: ```javascript
[{ name: 'Alice', children: [{ name: 'Bob', children: [{ name: 'Charlie', children: [] }] }] }, { name: 'Dave', children: [{ name: 'Eve', children: [] }, { name: 'Frank', children: [{ name: 'Grace', children: [] }, { name: 'Henry', children: [] }] }] }]
//Output: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Grace', 'Henry']```

function objectManipulation(objArr, resArr) {
    for (let obj of objArr) {
        resArr.push(obj.name);
        let children = obj.children;
        if (Array.isArray(children)) {
            objectManipulation(children, resArr);
        }
    }
}

let ans = [];
objectManipulation([{ name: 'Alice', children: [{ name: 'Bob', children: [{ name: 'Charlie', children: [] }] }] }, { name: 'Dave', children: [{ name: 'Eve', children: [] }, { name: 'Frank', children: [{ name: 'Grace', children: [] }, { name: 'Henry', children: [] }] }] }], ans);
console.log(ans);