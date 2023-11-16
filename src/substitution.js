// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // check if alphabet has exactly 26 characters
    if (alphabet.length != 26) {
      return false
    }
    const substitutionMessage = ""
    const alphabetArray = []
    // check if there are any repeats in the alphabet
    for(let i = 0; i < alphabet.length; i++) {
      if(alphabetArray.includes(alphabet[i])) {
        return false
      }
      alphabetArray.push(alphabet[i])
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
