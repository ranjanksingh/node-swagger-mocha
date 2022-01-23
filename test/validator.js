const chai = require('chai')
const expect = chai.expect

const validator = require('../app/validator')
const calculator = require('../app/calculator')

describe("validator isNumValid()", () => {
    it("should return true for a number in between 10 and 70", () => {
        expect(validator.isNumValid(39)).to.be.true
    })

    it("should return false when the number is less than or equal to 10", () => {
        expect(validator.isNumValid(10)).to.be.false
    })
});

//.skip for skipping the test
describe("calculator test", () => {
    before(() => {
        console.log("before all the test");
    })

    after(() => {
        console.log("after all the test");
    })

    beforeEach(() => {
        console.log("before each the test");
    })

    afterEach(() => {
        console.log("after each the test");
    })
    it("add of number 10 and 15 should be 25", () => {
        expect(calculator.add(10, 15)).to.be.equal(25);
    })

    it("add of number 10 and 15 should be -5", () => {
        expect(calculator.sub(10, 15)).to.be.equal(-5);
    })
});
