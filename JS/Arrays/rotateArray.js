function rotateArray(arr, k) {
    let resArr = [];
    for (let i = k; i < arr.length; i++) {
        resArr.push(arr[i]);
    }
    for (let j = 0; j < k; j++) {
        resArr.push(arr[j]);
    }
    return resArr;

}

let res = rotateArray([1, 2, 3, 4, 5], 2);
console.log(res);