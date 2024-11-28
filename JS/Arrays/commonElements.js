const a = [1, 2, 3, 4, 5, 3, 4, 5, 5, 5, 4];

const b = [4, 5, 6, 7, 8, 9];

function intersection(arr1, arr2) {
    let resArr = [];
    let set = new Set();
    for (let i of arr1) {

        // console.log(i);
        for (let j of arr2) {
            // console.log(j);

            if (i == j) {
                if (!set.has(i)) {
                    set.add(i);
                    resArr.push(i);
                }
            }
            // console.log(flag, i != j);
        }

    }

    return resArr;
}
console.log(intersection(a, b));