// LeetCode 234: palindrome-linked-list
// Your JavaScript solution here

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];
    while(head !== null) {
        arr.push(head.val)
        head = head.next;
    }

    for(i=0; i<arr.length/2; i++) {
        if(arr[i] !== arr[arr.length-1-i]) return false
    }
    return true
};