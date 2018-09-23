'use strict';

function printBinaryLogarithm(arr) {
    for (let num of arr) {
        let result = Math.log2(num);
        console.log(result);
    }
}

printBinaryLogarithm([1024, 1048576, 256, 1, 2]);
