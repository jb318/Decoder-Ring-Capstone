const expect = require("chai").expect
const { substitution } = require("../src/substitution");
describe("substitution(), my written test cases" , () => {
    it("should allow for input to include letters, special characters, and spaces", () => {
        const expected = "b acgd"
        const actual = substitution("a ^B!c", "^abcde!fghijklmnopqrstuvwxy", false)
        expect(acutal).to.equal(expected)
    })
    it("should maintain spaces throughout", () => {
        const expected = "  z  y    x"
        const actual = substitution("  a  b    c", "zyxwvutsrqponmlkjihgfedcba")
        expect(acutal).to.equal(expected)
    })
    it("should return false if alphabet parameters is less than or greater than 26 characters", () => {
        const expected = false
        const actual = substitution("abc", "zyxwvutsrqponmlkjihgfedcb")
        expect(actual).to.equal(expected)
    })
    it("should ignore captial letters", () => {
        const expected = "bxpca"
        const actual = substitution("Short","tsrqpyxwvuedcbaonmlkzjihgf", false)
        expect(actual).to.equal(expected)
    })
    it("should return false when all the characters in alphabet or not unique", () => {
        const expected = false
        const actual = substitution("abc", "falsefalsefalsefalsefalsef") 
        expect(actual).to.equal(expected)
    })
})