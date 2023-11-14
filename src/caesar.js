// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabetTimesThree = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false
    }
    const message = []
    const caesarShift = []
    let caesarMessage = ""
    for (let i = 0; i < input.length; i++) {
      message.push(input.slice(i, i + 1))
    }
    console.log(message)
    const shiftMessage = message.filter((messageShift,index) => {
      for (let i = 26; i < 52; i++) {
        if (messageShift.toLowerCase() === alphabetTimesThree[i]) {
          caesarShift.push(alphabetTimesThree[i + shift])
        }
      }
      caesarMessage += caesarShift[index]
    })
    return caesarMessage
  }
  return {
    caesar
  }
})()


module.exports = { caesar: caesarModule.caesar };
