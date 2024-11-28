// b) Implement a function that takes an array of objects representing books, with properties "title" and "authors," and returns an object where the keys are the author names and the values are arrays of book titles written by that author.

// Example:
// Input: 
// ```javascript
// [
//   { title: 'Book 1', authors: ['Author 1', 'Author 2'] },
//   { title: 'Book 2', authors: ['Author 2'] },
//   { title: 'Book 3', authors: ['Author 1', 'Author 3'] },
//   { title: 'Book 4', authors: ['Author 2', 'Author 3'] }
// ]
// ```
// Output: 
// ```javascript
// {
//   'Author 1': ['Book 1', 'Book 3'],
//   'Author 2': ['Book 1', 'Book 2', 'Book 4'],
//   'Author 3': ['Book 3', 'Book 4']
// }
// function booksAndAuthors(objArr) {
//     let ansObj = {};
//     for (let obj of objArr) {
//         book = obj.title;
//         authorList = obj.authors;
//         for (let author of authorList) {
//             if (ansObj[author]) {
//                 ansObj[author].push(book)
//             } else {
//                 let newArr = [];
//                 newArr.push(book);
//                 ansObj[author] = newArr;
//             }
//         }
//     }
//     return ansObj
// }




function booksAndAuthors(objArr) {
    let resObj = {};

    for (let obj of objArr) {
        let authors = obj.authors;
        let titles = obj.title;
        // console.log(authors);
        // console.log(titles);
        for (let author of authors) {
            // console.log(author);
            if (!resObj[author]) {
                let valArr = [];
                valArr.push(titles)
                resObj[author] = valArr;
                // console.log(resObj[author])
            }
            else {
                resObj[author].push(titles);
            }
        }
    }
    return resObj;
}
const res = booksAndAuthors([{ title: 'Book 1', authors: ['Author 1', 'Author 2'] }, { title: 'Book 2', authors: ['Author 2'] }, { title: 'Book 3', authors: ['Author 1', 'Author 3'] }, { title: 'Book 4', authors: ['Author 2', 'Author 3'] }]);
console.log(res);