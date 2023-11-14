// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
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
    const shiftMessage = message.filter((messageShift,index) => {
      if (messageShift.charCodeAt() >= 65 && messageShift.charCodeAt() <= 90) {
        if (messageShift.charCodeAt() + shift >= 65 && messageShift.charCodeAt() + shift <= 90) {
          console.log("Upper Case")
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift)).toLowerCase())
        }
        else if (messageShift.charCodeAt() + shift > 90){
          console.log("Upper Case - Shift Exceeds Alphabet")
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift - 26)).toLowerCase())
        }
        else {
          console.log("Upper Case - Shift Less Than Alphabet")
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift + 26)).toLowerCase())
        }
      }
      else if (messageShift.charCodeAt() >= 97 && messageShift.charCodeAt() <= 122) {
        if (messageShift.charCodeAt() + shift >= 97 && messageShift.charCodeAt() + shift <= 122) {
          console.log("Lower Case")
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift)))
        }
        else if (messageShift.charCodeAt() + shift > 122) {
          console.log("Lower Case - Shift Exceeds Alphabet")
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift - 26)))
        }
        else {
          console.log("Lower Case - Shift Less Than Alphabet")
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift + 26)))
        }
      }
      else {
        console.log("Special Character")
        caesarShift.push(messageShift)
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
