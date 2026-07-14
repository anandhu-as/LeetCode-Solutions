/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            const x = arr[i] + arr[j] === target
            if (x) return [i, j]

        }
    }
};