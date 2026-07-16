/**
 * @param {number[]} nums
 * @return {number}
 */
//421
//124
//3 is the missng num
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return nums.length;
};
