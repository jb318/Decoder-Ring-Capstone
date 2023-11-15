const expect = require("chai").expect
const { polybius }= require("../src/polybius")
describe("polybius(), My written test cases", () => {
    it("should return the correct encode value", () => {
        const expected = "443251"
        const actual = polybius("ThE")
        expect(actual).to.equal(expected)
    })
    it("should return the correct decode value", () => {
        const expected = "ace"
        const actual = polybius("113151", false)
        expect(actual).to.equal(expected)
    })
    it("should leave spaces as is when decoding", () => {
        const expected = "a space"
        const actual = polybius("11 3453113151", false)
        expect(actual).to.equal(expected)
    })
    it("should return false for any decode value that has and odd length", () => {
        const expected = false
        const actual = polybius("11111", false) 
        expect(actual).to.equal(expected)
    })
    it("should decode '42' as (i/j)", () => {
        const expected = "(i/j)gnore"
        const actual = polybius("422233432451", false)
        expect(actual).to.equal(expected)
    })
})