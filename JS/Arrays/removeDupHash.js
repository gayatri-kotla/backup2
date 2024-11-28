function removeDuplicates(arr) {
    let map = new Map();
    let resArr = [];
    for (let i of arr) {
        if (!map.has(i)) {
            map.set(i, 0);

        }
        map.set(i, map.get(i) + 1);

    }
    for (let entry of map.entries()) {
        resArr.push(entry[0]);
    }
    return resArr;
}

const res = removeDuplicates([2, 1, 3, 2, 3]);
console.log(res);