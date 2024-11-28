// 3. Array Manipulation:

// f) Write a function to find the longest consecutive sequence 
// of elements in an array and return its length.The sequence 
// should be in increasing order and contiguous.

//     Example:

// Input: [1, 9, 3, 10, 4, 20, 2]

// Output: 4(The longest consecutive sequence is 1, 2, 3, 4)

function longSequence(arr) {

    let resArr = [];
    let sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] - 1) {
            resArr.push(arr[i]);
        }
    }
    console.log(sortedArr)
    return resArr;
}

const res = longSequence([1, 9, 3, 10, 4, 20, 2, 10, 35, 36, 37, 38, 11]);
console.log(res);