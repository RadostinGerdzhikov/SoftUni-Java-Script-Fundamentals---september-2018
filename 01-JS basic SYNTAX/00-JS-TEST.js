'use strict';
let a = 'azafafafafafa';
console.log(a);

function sumOfNumber() {
    let arr = [1,"Pesho",`r`];
    arr[0] = 8;
    arr[10] = "helloo";
    console.log(arr[6]); // отпечатва undefinde
    console.log(arr);
}
sumOfNumber();

let v=1;
let b=3;
let c=9000;
console.log(v + b + c);

function sumtOfTwoNumbers(a,b) {
    let result=a+b;
    console.log(result);
}

sumtOfTwoNumbers(13,-1000);
sumtOfTwoNumbers(13,);
sumtOfTwoNumbers(13,1,1);

let str = "hello";
console.log(str.length);
console.log(str[0]);
//str[0]='s';
//console.log(str); // innutubel, dava greshka v js.

let s = "6";
console.log(typeof(s));

s=s+5;
console.log(s);

let g="5";
console.log(typeof(g));

