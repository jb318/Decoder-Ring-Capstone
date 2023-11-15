const { expect }  = require("chai")
const { caesar } = require("../src/caesar")
describe("testing caesar() functionality, my written test cases", () => {
    it("should ignore capital letters", () => {
        const expected = "ego"
        const actual = caesar("ACK", 4) 
        expect(actual).to.equal(expected)
    })
    it("should return false if the shift value is equal to 0", () => {
        const expected = false
        const actual = caesar("false", 0)
        expect(actual).to.equal(expected)
    }) 
    it("should return false if the shift value is less than -25", () => {
        const expected = false
        const actual = caesar("false", -29)
        expect(actual).to.equal(expected)
    }) 
    it("should return false if the shift value is greater than 25", () => {
        const expected = false
        const actual = caesar("twd", 98)
        expect(actual).to.equal(expected)
    }) 
    it("should handle shifts that go past the end of the alphabet" , () => {
        const expected = "ace"
        const actual = caesar("WyA", 4) 
        expect(actual).to.equal(expected)
    })
    it("should handle shifts that go past a", () => {
        const expected = "what"
        const actual = caesar("doHa", -7)
        expect(actual).to.equal(expected)
    })
    it("should not change nonalphabetical characters", () => {
        const expected = "[ keep the brackets ]"
        const actual = caesar("[ jddo sgd aqzbjdsr ]", 1)
        expect(actual).to.equal(expected)
    })
    it("should adjust shift accordingly based on encode truth value", () => {
        const expected = "shift left"
        const actual = caesar("tijgu mfgu", 1, false)
        expect(actual).to.equal(expected)
    })
})
