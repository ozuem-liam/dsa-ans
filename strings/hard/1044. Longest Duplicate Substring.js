/*
Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times. The occurrences may overlap.

Return any duplicated substring that has the longest possible length. If s does not have a duplicated substring, the answer is "".

 

Example 1:

Input: s = "banana"
Output: "ana"
Example 2:

Input: s = "abcd"
Output: ""
 

Constraints:

2 <= s.length <= 3 * 104
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
 function substr(str, begin, end) {
    let result = "";
    for (let i = begin; i < end; i++) {
      result += str[i];
    }
    return result;
  }
  
  function lcp(str1, str2) {
    let n = Math.min(str1.length, str2.length);
    for (let i = 0; i < n; i++) {
      if (str1.charAt(i) != str2.charAt(i)) {
        return substr(str1, 0, i);
      }
    }
    return substr(str1, 0, n);
}

var longestDupSubstring = function(s) {
    const str = s;
    const suffixes = [];
    
    for (let i = 0; i < str.length; i++) {
        suffixes.push(substr(str, i, str.length));
    }
    
    suffixes.sort();
    
    let result = [];
    let res = [];
    let lastLongestSubStrLen = 0;
    for (let i = 0; i < str.length - 1; i++) {
        const p = lcp(suffixes[i], suffixes[i + 1]);
        if (lastLongestSubStrLen <= p.length) {
            result.push(p);
            lastLongestSubStrLen = p.length;
            continue;
        }
    }
    return result;
};