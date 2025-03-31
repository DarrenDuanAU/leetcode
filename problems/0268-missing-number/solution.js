// LeetCode 268: missing-number
// Your JavaScript solution here

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    originalSum = 0;
    expectedSum = 0;
    for( i = 0; i < nums.length + 1; i++ ) {
        if(i < nums.length) {
            originalSum += nums[i]
        }
        expectedSum += i;
    }
    return expectedSum - originalSum;
};