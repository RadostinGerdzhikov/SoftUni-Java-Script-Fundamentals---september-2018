'use strict';
function oddEven(number) {

    if (!Number.isInteger(number)){
        console.log("invalid");
    } else if (number % 2 === 0){
        console.log("even");
    }else{
        console.log("odd");
    }

}

oddEven(1.5);
oddEven(2);
oddEven(3);


