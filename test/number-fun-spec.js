const assert = require('assert');
const { returnsThree, reciprocal } = require('../problems/number-fun.js')


describe("returnsThree()", () => {
    it('Should return three', () => {
        assert.strictEqual(returnsThree(), 3)
    });
});

describe("reciprocal()", () => {
    context("When input is a number and between 1 and 1,000,000", () => {
        it('Should return the recipocal', () => {
            assert.strictEqual(reciprocal(2), 1 / 2)
            assert.strictEqual(reciprocal(1000), 1 / 1000)
            assert.strictEqual(reciprocal(575), 1 / 575)

        });
        it('Should be between 1 and 1,000,000', () => {
            assert.throws(() => reciprocal(-5000000000), TypeError)
            assert.throws(() => reciprocal(0), TypeError)
            assert.throws(() => reciprocal(1000000000000), TypeError)
        })
    });
    context("When input is NaN", () => {
        it('Should throw a TypeError', () => {
            assert.throws(() => reciprocal('42'), TypeError)
        });
    })
});
