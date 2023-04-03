function isPalindrome(word) {
  // Write your algorithm here
  const reversedString = reverseString(word)
  console.log(word + "    " + reversedString)
  return reversedString === word
}
function reverseString(string){
  const stringArray = string.split('')
  const reversedArray = stringArray.reverse()
  const reversedString = reversedArray.join('')
  return reversedString
}
/* 
  // reverse the input string
  // return conditional result of word the same as reversed string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
