// d) Implement a function that takes an array of objects representing employees, with properties "name" and "salary," and returns the names of the top N employees with the highest salaries.
// Example:
// Input:
// ```javascript
// [
//     { name: 'Alice', salary: 50000 },
//     { name: 'Bob', salary: 60000 },
//     { name: 'Charlie', salary: 40000 },
//     { name: 'Dave', salary: 70000 },
//     { name: 'Eve', salary: 55000 }
// ]
// ```
// Output: ['Dave', 'Bob'] (Top 2 employees with the highest salaries)

function top2Salaries(objArr, k) {
    let resArr = [];
    objArr.sort((a, b) => b.salary - a.salary);
    for (let i = 0; i < k; i++) {
        // console.log(objArr[i].name)
        resArr.push(objArr[i].name)
    }
    // console.log(objArr)
    return resArr;
}
const res = top2Salaries([
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 40000 },
    { name: 'Dave', salary: 70000 },
    { name: 'Eve', salary: 55000 }
], 2)
console.log(res);