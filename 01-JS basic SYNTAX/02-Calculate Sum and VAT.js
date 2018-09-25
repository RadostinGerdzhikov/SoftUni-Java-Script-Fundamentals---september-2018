'use strict';
function calculateSumVatTotal(money) {
    let sum = 0;
    for (let num of money) {
        sum += num;
    }
    let vat = sum * 0.2;
    let total = sum + vat;
    console.log(`sum = ${sum}`);
    console.log(`Vat = ${vat}`);
    console.log(`total = ${total}`);
}
//calculateSumVatTotal([1.20, 2.60, 3.50]);
calculateSumVatTotal([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);