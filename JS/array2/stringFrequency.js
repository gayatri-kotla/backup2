// h) Given an array of strings, write a function to find the most frequent string in the array. If there are multiple strings with the same highest frequency, return the one that appears first.

// Example:
// Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Output: 'apple' (The string 'apple' appears 3 times, which is the highest frequency)

function stringFrequency(strArr) {
    let resString = "";
    let map = new Map();
    for (let item of strArr) {
        // console.log(item)
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }
    let maxval = 0;
    for (let entry of map.entries()) {
        let val = entry[1];
        let key = entry[0];
        if (val > maxval) {
            maxval = val;
            resString = key;
        }
    }
    return resString;
}

const res = stringFrequency(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']);
console.log(res)