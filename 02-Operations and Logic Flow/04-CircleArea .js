'use strict';
function calculateCircleArea(number) {

    let area = Math.PI * number**2;
    console.log(area);
    console.log(Math.round(area * 100)/100);
}
calculateCircleArea(5);