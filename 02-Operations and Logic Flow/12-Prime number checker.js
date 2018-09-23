'use strict';

function checkIsPrime(number) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            prime = false;
            break;

        }
    }
        console.log(prime && (number > 1));
}

checkIsPrime(1);
checkIsPrime(0);
checkIsPrime(8);
checkIsPrime(81);
