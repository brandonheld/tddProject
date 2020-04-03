
function myMap(inputArray, callback) {
    const outputArray = [];
    for (let index = 0; index < inputArray.length; index++) {
        outputArray.push(callback(inputArray[index], index, inputArray));
    }
    return outputArray;
}

let arr = [1, 2, 3, 4]

module.exports = myMap;
