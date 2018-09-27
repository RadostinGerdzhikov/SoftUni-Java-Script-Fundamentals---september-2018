'use strict';
function calculateAreaAndPerimeterRectangle(sideA, sideB) {
    let area = sideA * sideB;
    let perimeter = 2 *(sideA + sideB);
    console.log(area);
    console.log(perimeter);
}

calculateAreaAndPerimeterRectangle(2,2);