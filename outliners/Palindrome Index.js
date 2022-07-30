const isPalindrom = (s) => {
    let newString = '';
    for (let i = s.length - 1; i >= 0; i--) {
        newString = newString + s[i]
    }
    return s === newString;
}

function palindromeIndex(s) {
    // Write your code here
    
    let palindromIndex = -1;
    let len = s.length;
    
    for (let i = 0; i < len / 2; i++) {
        if (s.charAt(i) !== s.charAt(len - i - 1)) { 
            if (i + 1 < len) {
                let isPal = isPalindrom(s.substring(i + 1, len - i));
                if (isPal) {
                    return i;
                }
                return len - i - 1;
            }
        }
    }
   
    
    return palindromIndex;
}