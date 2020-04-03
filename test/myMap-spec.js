const myMap = require('../problems/myMap.js');
const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;
chai.use(spies)


let arr = [];

describe("myMap()", () => {

    beforeEach(() => {
        arr = [1, 2, 3, 4, 5]
    });

    it("Should return a new array where the callback has been called upon once for each element in the original array", () => {
        expect(myMap(arr, (ele) => ele * 2)).to.deep.equal([2, 4, 6, 8, 10]);
    });
    it('Should not mutate the original array', () => {
        myMap(arr, (ele) => ele * 2)
        expect(arr).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it('Should not use the built in Array#map function', () => {
        const usesMap = chai.spy.on(arr, 'map')
        myMap(arr, (ele) => ele * 2)
        expect(usesMap).to.not.have.been.called()

    });
})
