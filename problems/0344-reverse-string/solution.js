// LeetCode 344: reverse-string
// Your JavaScript solution here

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(i=0; i< s.length/2; i++ ) {
        let temp = s[i];
        s[i] = s[s.length - 1 -i];
        s[s.length - 1 - i] = temp;
    }
    return s
};
