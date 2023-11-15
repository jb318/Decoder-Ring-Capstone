// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // return false if there is any unwanted functionality such as shift value being 0
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false
    }
    // properly adjust shift to be either positive or negative depending on the truth value of encode
    if (encode === false) {
      shift = shift * -1 
    }
    // create an array that contains each character of the input at a specific index, an array that contains the shift value of those indices, and a string variable that contains the decoded message
    const message = []
    const caesarShift = []
    let caesarMessage = ""
    for (let i = 0; i < input.length; i++) {
      message.push(input.slice(i, i + 1))
    }
    // loop through the message array and append to the shift array as intended by the instructions
    const shiftMessage = message.filter((messageShift,index) => {
      if (messageShift.charCodeAt() >= 65 && messageShift.charCodeAt() <= 90) {
        if (messageShift.charCodeAt() + shift >= 65 && messageShift.charCodeAt() + shift <= 90) {
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift)).toLowerCase())
        }
        else if (messageShift.charCodeAt() + shift > 90){
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift - 26)).toLowerCase())
        }
        else {
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift + 26)).toLowerCase())
        }
      }
      else if (messageShift.charCodeAt() >= 97 && messageShift.charCodeAt() <= 122) {
        if (messageShift.charCodeAt() + shift >= 97 && messageShift.charCodeAt() + shift <= 122) {
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift)))
        }
        else if (messageShift.charCodeAt() + shift > 122) {
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift - 26)))
        }
        else {
          caesarShift.push(String.fromCharCode((messageShift.charCodeAt() + shift + 26)))
        }
      }
      else {
        caesarShift.push(messageShift)
      }
      // don't forget to update the decoded message string variable
      caesarMessage += caesarShift[index]
    })
    return caesarMessage
  }
  return {
    caesar
  }
})()


module.exports = { caesar: caesarModule.caesar };
