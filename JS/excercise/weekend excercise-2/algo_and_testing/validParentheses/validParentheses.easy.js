/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
    if(s.length % 2 === 1) {
        return false;
    }
    for(let i=0; i<s.length-1; i+=2) {
        switch(s[i]) {
            case "(":
                if(s[i+1] !== ")") {
                    return false;
                }
                break;
            case "[":
                if(s[i+1] !== "]") {
                    return false;
                }
                break;
            case "{":
                if(s[i+1] !== "}") {
                    return false;
                }
                break;
            default:
                return false;
        }
    }
    return true;
};

module.exports = isValid;
