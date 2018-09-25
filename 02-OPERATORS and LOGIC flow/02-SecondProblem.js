'use strict';

console.log("yes");
console.log("yes");

let a = 3;

// folsy operators

let w = false || null || 0 || '' || 'hey'; // взима първата истина и я отпечтава оператора или
console.log(w);

if (0 || null || undefined || '' || false) {
    console.log('Ihaaa');
}

if (0 || null || undefined || '' || false || "hey") {
    console.log('Ihaaaa');
}


// ako e && vzima pyrvoto false i go otpeqatva

if (null && 'hey') {
    console.log('Heyyyy'); // не отрпчтва нищо, защото намери първия фолс
}

// двойно и торйно равно

console.log("0" == true); // false , защото нуларта е false в JS
console.log("0" == false); // true, защото нулата е фалсе в JS, preravn[va nulata kym boolen;

if ('') {
    console.log("afafafa"); // тука не печата нищо, защото ифа е нула, prazen string
}
if ("Hello") {
    console.log("gugrguma"); // tuka e pylen string i peqat gurguma
}
if ('0') {
    console.log("YEs"); // kato ne sravnqvame nulata vlizame v ifa, тука тя е просто пълен стринг
}

// празният масив [] също е falsy стойност

console.log([] == true); // false
console.log([] == false); // true
if ("[]") {
    console.log("true");
}

console.log(null == false || null == true); // false // нулат не е нито false, nito true

if (!null) {
    console.log(true); // kato ne е null, влизаме в ифа и отпечатваме, това става само каот са две ==, при === теиз пробелм изчезват
}

// използва се про

let r = null;

if (r) {
    console.log("neshto si"); // nikogane vlizame v tozi if
}


if (!r) {  // kato go отречем обръщаме знае znaka i vlizame v tozi if
    console.log("neshto si"); // nikogane vlizame v tozi if
}

if (!undefined){
    console.log("You are the best!"); // obratnoto na false e true и влизаме в ifa
}