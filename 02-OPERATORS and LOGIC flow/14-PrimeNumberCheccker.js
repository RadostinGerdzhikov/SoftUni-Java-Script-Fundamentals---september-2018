'use strict';
function checkIsPrime(number) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0){
            prime = false;
            break;
        }
    }

    console.log(prime && (number > 1));

}
checkIsPrime(7);
checkIsPrime(8);
checkIsPrime(81);

checkIsPrime(81);
checkIsPrime(8);
checkIsPrime(7);
