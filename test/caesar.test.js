const expect = require("chai").expect
const caesarModule = require("../src/caesar")
describe("caesarModule", () => {
    it("should return the appropriate message given a shift value", () => {
        const expceted = "ego"
        const actual = caesarModule("ack", 4) 
        expect(actual.to.equal(expected))
    })
})
