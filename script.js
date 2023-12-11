function firstNonRepeatedChar(str) {
 // Write your code here
	const char = {}
	 for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
	 }
 }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
