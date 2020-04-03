function returnsThree() {
    return 3;
}

function reciprocal(num) {
    if (typeof num !== 'number') {
        throw new TypeError("input is not a number")
    }

    if (num < 1 || num > 1000000) {
        throw new TypeError('Input must be between 1 and 1000000')
    }
    return 1 / num;
}


module.exports = { returnsThree, reciprocal };


// throw new TypeError('Hello', "someFile.js", 10)
