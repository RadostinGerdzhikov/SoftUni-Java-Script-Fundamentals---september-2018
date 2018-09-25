'use strict';
// for in loop по индексите на масива, а for out loop vyrvi po стойностите на масива

// snippeta e iter
 let arr = [1,2,3,5,'num','mama','q'];
for (let ell in arr) {
    console.log(ell);
}

for (let ell of arr ) {
    console.log(ell);
}