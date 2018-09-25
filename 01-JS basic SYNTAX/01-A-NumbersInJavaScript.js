'use strict';
let n = 5;
console.log(typeof(n) + ` ` + n);

let bin = 0b10000001;
console.log(typeof (bin) + ` ` + bin);

let x = Number.parseInt("2.99");
console.log(typeof(x) + ` ` + x);

let a = 8;
console.log(a.toFixed(5));

let y = 3; let m = 0;
console.log(`y = ${y} m = ${m}`);

let b = 3;
console.log(b);

console.log(b/0);
console.log(a*Infinity);
console.log(0/0);

let realNum = 0.01; let sum = 0;
for (let i = 0; i < 100 ; i++) {
    sum += realNum;
}

console.log(sum);

console.log(0.1+0.2);
