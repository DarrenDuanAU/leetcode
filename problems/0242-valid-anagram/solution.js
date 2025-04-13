// LeetCode 242: valid-anagram
// Your JavaScript solution here

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const map = new Map();
    for(i=0; i<s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }

    for(i=0; i<t.length; i++) {
        if(!map.has(t[i])) return false
        if(map.get(t[i]) === 0) return false
        map.set(t[i],  map.get(t[i]) - 1)
    }
    return true
};