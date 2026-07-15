/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // 1 2 3 5 1
const containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};