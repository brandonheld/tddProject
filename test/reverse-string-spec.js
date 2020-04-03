const chai = require('chai');
const chaiSpies = require('chai-spies');
const reverseString = require('../problems/reverse-string.js')

let expect = chai.expect;


describe('reverseString()', () => {
    context("When input is a string", () => {
        it('Should reverse the string', () => {
            const input = 'fun';
            const output = 'nuf';

            expect(reverseString(output)).to.equal(input);

        });
    });
    context("when input is not a string", () => {
        it("should throw a type error when the input is not a string", () => {
            expect(() => reverseString(!String)).to.throw(TypeError)
        });
    });
});
