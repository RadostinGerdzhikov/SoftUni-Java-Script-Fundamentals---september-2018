'use strict';
// let g=undefined;
//// console.log(g);
//
// console.log("The date is: " + new Date());
// console.error("No empty spaces");
// console.warn("No Empty spaces");
//
// alert("Greeting form JS");

function nextDay(year,month,day) {
    let date = new Date(year,month-1,day);
    let oneDay = 24*60*60*1000; // new Date rabot s mili sekundi, sekundi po 1000
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate();


 }

console.log(nextDay(2016,9,30));



