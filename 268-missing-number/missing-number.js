/**
 * @param {number[]} nums
 * @return {number}
 */
//421
//124
//3 is the missng num
const missingNumber = (nums) => {
    const arr = nums.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }

    return arr.length;
};
