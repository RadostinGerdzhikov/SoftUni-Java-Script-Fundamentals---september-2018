'use strict';

function pointInsideOtside(data) {
    let x = data[0];
    let y = data[1];
    let xMin = data[2];
    let xMax = data[3];
    let yMin = data[4];
    let yMax = data[5];

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log("inside");

    } else {
        console.log("outside");
    }
}

pointInsideOtside([8, -1, 2, 12, -3, 3]);
pointInsideOtside([12.5, -1, 2, 12, -3, 3]);