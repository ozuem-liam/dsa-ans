/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

var isPalindrome = function(s) {
    const pattern = /^[a-zA-Z0-9]+$/;
    
    let lowerCaseString = "";
    
    for (let char of s) {
        if(char.match(pattern)) {
            lowerCaseString += char.toLowerCase();
        }
    }
    
    let right = lowerCaseString.length - 1;
    let left = 0;
    
    while (left <= right) {
        if (lowerCaseString[left] !== lowerCaseString[right]) {
            return false
        }
        left++;
        right--;
     }

    // Alternative Solutions
    
    /*
        let reverseString = lowerCaseString.split("").reverse().join("");
        let reverseString = "";
        
        for (let i = lowerCaseString.length - 1; i >= 0; i--) {
            reverseString += lowerCaseString[i];
        }
    */
    
    return true;
};
