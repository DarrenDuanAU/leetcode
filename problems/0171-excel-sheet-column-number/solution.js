// LeetCode 171: excel-sheet-column-number
// Your JavaScript solution here

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;

    for(i = 0; i < columnTitle.length; i ++ ) {
        result = result * 26
        result = result + (columnTitle[i].charCodeAt(0) - 64)
    }
    return result
};
