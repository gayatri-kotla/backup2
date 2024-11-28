let resArr = [];
function removeDuplicates(arr) {

    for (let ele = 0; ele < arr.length; ele++) {
        // console.log("ele", ele)
        element = arr[ele];
        let flag = false;
        for (let item = ele + 1; item < arr.length; item++) {
            // console.log("item:", arr[item])
            if (element == arr[item]) {
                flag = true;
            }
            console.log(flag, arr[item])
        }

        if (flag == false) {
            resArr.push(element);
        }
        // flag = false

    }
    return resArr;
}

let result = removeDuplicates([2, 4, 5, 3, 2, 3]);
console.log(result);