// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // check if the alphabet is missing
    if (alphabet === undefined) {
      return false
    }
    // check if alphabet has exactly 26 characters
    if (alphabet.length !== 26) {
      return false
    }
    const standardizedAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let substitutionMessage = ""
    const alphabetArray = []
    const inputArray = []
    // check if there are any repeats in the alphabet
    for(let i = 0; i < alphabet.length; i++) {
      if(alphabetArray.includes(alphabet[i])) {
        return false
      }
      alphabetArray.push(alphabet[i])
    }
    // Update inputArray to store each input character at a specific index
    for (let i = 0; i < input.length; i ++) {
      inputArray.push(input[i])
    }
    // loop through inputArray and add each index to substitutionMessage when encode is true
    const substituionLoop = inputArray.filter((substitute) => {
      if (substitute === " ") {
        substitutionMessage += " "
      }
      // update substitutionMessage based on truth value of encode
      for (let i = 0; i < alphabet.length; i ++) {
        if (encode === false) {
          if (substitute.toLowerCase() === alphabet[i]) {
            substitutionMessage += standardizedAlphabet[i]
          }
        }
        else {
          if (substitute.toLowerCase() === standardizedAlphabet[i]) {
            substitutionMessage += alphabet[i]
          }
        }
      }
    })
    
    // Return subsitutionMessage here, which will be the proper substituted message when a user calls this function
    return substitutionMessage
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
