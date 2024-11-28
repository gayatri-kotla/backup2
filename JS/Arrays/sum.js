

function evenSum(arr) {
    let sum = 0;
    for (let i of arr) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}

let result = evenSum([1, 2, 3, 4, 5, 6]);
console.log(result)