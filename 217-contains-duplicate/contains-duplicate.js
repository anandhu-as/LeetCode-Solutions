/**
 * @param {number[]} nums
 * @return {boolean}
 */
 //Set stores array without duplicate elements
 // so length of array will be  3
 //length of orginal array 4
 //3!=4 returns true
 // 1 2 3 5 1
const containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};