'use strict';
function calculateTriangleArea(side,side1 ,side2) {
    let s = (side + side1 + side2)/2;
    let area = Math.sqrt(s*(s-side)*(s-side1)*(s-side2));
    console.log(area);
}

calculateTriangleArea(2,3.5,4);