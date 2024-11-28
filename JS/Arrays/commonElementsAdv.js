function commonElements(a, b) {
    let resArr = [];
    const set = new Set();
    for (let i of a) {
        // if (!set.has(i)) {
        set.add(i);
        // }
    }
    for (let j of b) {
        if (set.has(j)) {
            resArr.push(j);
        }
    }
    return resArr;
}

let res = commonElements([1, 2, 3, 4, 5, 3, 4, 5], [4, 5, 6, 7, 8, 9]);
console.log(res)