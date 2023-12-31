// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function isEven(n) {
    return n % 2 == 0;
 }
 
 function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }
//  Note, the helper functions above were retreived on November 15th, 2023 from user Steve Mayne on StackoverFlow url: https://stackoverflow.com/posts/6211660/revisions
  function polybius(input, encode = true) {
    // create a rule that assigns each letter in the alphabet to a cipher (i & j are both 42)
    const cipherColumns = [{number: 1, letters: ["a","f","l","q","v"]},{number: 2, letters: ["b","g","m","r","w"]},{number: 3, letters:["c","h","n","s","x"]},{number: 4, letters: ["d","(i/j)","o","t","y"]},{number: 5, letters: ["e","k","p","u","z"]}]
    const cipherRows = [{number: 1, letters: ["a","b","c","d","e"]},{number: 2, letters: ["f","g","h","(i/j)","k"]},{number: 3, letters: ["l","m","n","o","p"]},{number: 4, letters: ["q","r","s","t","u"]},{number: 5, letters: ["v","w","x","y","z"]}]
    const inputArray = []
    let cipherMessage = ""
    let cipherMessageLength = 0
    let twoCharacterChecker = 0
    let firstNumber = 0
    let secondNumber = 0
    for (let i = 0; i < input.length; i ++) {
      inputArray.push(input.slice(i, i + 1))
    }
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].charCodeAt() >= 48 && inputArray[i].charCodeAt() <= 57) {
        cipherMessageLength += 1
      }
    }
    // check if encoded input has even length.  If not, return false
    if (isOdd(cipherMessageLength)) {
      return false
    }
    // Loop through each element in the newly created inputArray and assign the appropriate encode or decode value of each index to ciperMessage
    const inputLoop = inputArray.filter((cipher, index) => {
      // if the function is called and encode is true, encode a string of alphabetical characters
      if (encode === true) {
        if (cipher.toLowerCase().charCodeAt() < 97 || cipher.toLowerCase().charCodeAt() > 122) {
          cipherMessage += cipher
        }
        if (cipher === "j" || cipher === "i") {
          cipherMessage += "42"
        }
        for (let i = 0; i < cipherColumns.length; i++) {
          for (let j = 0; j < cipherRows.length; j++) {  
            if (cipherColumns[i].letters.includes(cipher.toLowerCase()) && cipherRows[j].letters.includes(cipher.toLowerCase())) {
                cipherMessage += cipherColumns[i].number
                cipherMessage += cipherColumns[j].number
            }
          }
        }
      }
      // Otherwise, if the function is called with encode set to false, decode a set of numbers to their respective non-numeric counterparts
      else {
        // Track each pair of numbers
        if (cipher.charCodeAt() < 48 || cipher.charCodeAt() > 57) {
          cipherMessage += cipher
          twoCharacterChecker = 0
        }
        else {
          for (let i = 0; i < cipherColumns.length; i++) {
            for (let j = 0; j < cipherRows.length; j++) {
              if (twoCharacterChecker === 0) {
                if (cipherColumns[i].number == cipher) {
                  firstNumber = cipher - 1
                }
              }
              if (twoCharacterChecker === 1) {
                if (cipherRows[j].number == cipher) {
                  secondNumber = cipher - 1
                }
              }
          }
          }
          // Once two numbers have been recorded, add the character that associates with the two numbers and then reset number count
          twoCharacterChecker += 1
          if (twoCharacterChecker === 2) {
            cipherMessage += cipherColumns[firstNumber].letters[secondNumber]
            firstNumber = 0
            secondNumber = 0
            twoCharacterChecker = 0
          }
        }
      }
      
    })
  return cipherMessage  
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
