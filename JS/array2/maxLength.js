function maxConsecutiveElements(arr) {
    let resLength = 0;
    let count = 1;
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);
    for (let i = sortedArr.length - 1; i > 0; i--) {
        if (sortedArr[i] == sortedArr[i - 1] + 1) {
            count++;
        } else {
            if (count > resLength) {
                resLength = count;
            }
            count = 0;
        }
        // console.log(sortedArr[i]);
    }
    return resLength;
}

const res = maxConsecutiveElements([1, 2, 3, 4, 9, 10, 10, 11, 20, 35, 36, 37, 38, 39, 40]);
console.log(res);