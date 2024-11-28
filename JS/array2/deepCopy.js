// f) Write a function that deep clones an object, including nested objects and arrays, without any references to the original object.

// Example:
// Input: { name: 'John', address: { city: 'New York', country: 'USA' } }
// Output: { name: 'John', address: { city: 'New York', country: 'USA' } } (A completely separate copy of the object)


let obj = { name: 'John', address: { city: 'New York', country: 'USA' } };
let obj1 = { ...obj }; //shallow copy
// console.log(obj);
obj1.address.city = 'vskp'
obj1.name = "shanu"
console.log(obj);
console.log(obj1);

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "shanu";
// console.log(obj);
// console.log(obj2);


function booksAndAuthors(objArr) {
    let ansObj = {};
    for (let obj of objArr) {
        book = obj.title;
        authorList = obj.authors;
        for (let author of authorList) {
            if (ansObj[author]) {
                ansObj[author].push(book)
            } else {
                let newArr = [];
                newArr.push(book);
                ansObj[author] = newArr;
            }
        }
    }
    return ansObj
}

