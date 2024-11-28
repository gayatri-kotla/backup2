// c) Given an array of objects representing students, with properties "name" and "subjects," write a function to find the student(s) who enrolled in the maximum number of subjects.

// Example:
// Input: 
// ```javascript
// [
//   { name: 'Alice', subjects: ['Math', 'Science'] },
//   { name: 'Bob', subjects: ['English', 'History', 'Math'] },
//   { name: 'Charlie', subjects: ['Math', 'Science', 'English', 'History'] }
// ]
// ```
// Output: ['Charlie'] (Charlie enrolled in the maximum number of subjects)

function enrolledInMaximumSubjects(objArr) {
    let ansArr = [];
    let maxLength = 0;
    for (let obj of objArr) {
        let sub = obj.subjects;
        if (sub.length > maxLength) {
            maxLength = sub.length;
            ansArr = [obj.name]
        }
        else if(sub.length === maxLength) {
            ansArr.push(obj.name)
        }

    }



    return ansArr;
}
const res = enrolledInMaximumSubjects([
    { name: 'Alice', subjects: ['Math', 'Science'] },
    { name: 'Bob', subjects: ['English', 'History', 'Math'] },
    { name: 'Charlie', subjects: ['Math', 'Science', 'English', 'History'] }
])
console.log(res);