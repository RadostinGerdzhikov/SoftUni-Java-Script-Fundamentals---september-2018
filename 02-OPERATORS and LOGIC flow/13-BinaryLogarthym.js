'use strict';
function printLogarithm(numbers) {
    for (let number of numbers) {
        console.log(Math.log2(number));
    }
}

printLogarithm([1024,1048576,256,1,2]);



// const както се дефинира един път величина const, не може да се сменя стойността й

const q = 5;
// Това не може да се прави, ако е const
// q = 5 + 5;
// console.log(q);