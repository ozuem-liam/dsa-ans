/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const pattern = /^[a-zA-Z0-9]+$/;
    
    let lowerCaseString = "";
    
    for (let str of s) {
        if(str.match(pattern)) {
            lowerCaseString += str.toLowerCase();
        }
    }
    
    let inverseString = "";
    
    if(lowerCaseString === "") {
        return true;
    }

    for (let i=lowerCaseString.length - 1; i >= 0 ; i--) {
        inverseString += lowerCaseString[i];
    }
    
    return lowerCaseString === inverseString;
};

const str = "0P";

console.log(isPalindrome(str));

const minRemoveToMakeValid = (str)=> {
    const stack = [];
 const splitted_str = str.split("");
 for (let i = 0; i < str.length; i++) {
   const char = str[i];
   if (char === "(") stack.push(i); // if curr char is (  then we will push into our stack
   else if (char === ")") {
     if (stack.length === 0) {
         // if out stack is empty then we will make ) as ''
       splitted_str[i] = "";
     } else {
         //! if stack is not empty then we will pop top of the stack
       stack.pop();
     }
   }
 }
   // if we have extra ( bracket we will remove it by making it as ''
 for (let i = 0; i < stack.length; i++) {
   const char = stack[i];
   splitted_str[char] = "";
 }

 return splitted_str.join(""); // at last we will join the splitted_str
};

/*
 lee(t(c)o)de)"
 "a)b(c)d"

 stack: []

 ) = ""
 [4]
 [] pop stack


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

function lrs(str) {
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
}

const string = "abcd"
console.log(lrs(string))