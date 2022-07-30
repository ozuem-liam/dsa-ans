const string = "This is A String";

console.log(string.toLowerCase())
console.log(string.toUpperCase())
console.log(string.charAt(2))
console.log(string.charCodeAt(5))
console.log(string.split(""))
console.log(string[3]);
console.log(string.split("").join(""));
console.log(string.toLowerCase().includes("a"));
console.log(string.replace("h", "e"));
console.log(string.length);

for (let i = 0; i <= string.length - 1; i++) {
    console.log(string[i])
}

for (let char of string) {
    console.log(char);
}

for (let idx in string) {
    console.log(idx)
}





