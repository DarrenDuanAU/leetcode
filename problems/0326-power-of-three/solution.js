// LeetCode 326: power-of-three
// Your JavaScript solution here

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n > 0 && 1162261467 % n == 0;
};