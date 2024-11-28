let set = new Set();
let resArr = [];
function removeDuplicates(arr) {
    for (let i of arr) {
        if (!set.has(i)) {
            set.add(i);
            resArr.push(i);
        }
    }
    return resArr;
}

const res = removeDuplicates([2, 4, 3, 1, 2, 3, 1]);
console.log(res);