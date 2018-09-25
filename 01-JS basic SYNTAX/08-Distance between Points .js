'use strict';
function distanceBetweenTwoPoints(x,y,x1,y1) {
    let point1 = {x:x,y:y};
    let point2 = {x:x1,y:y1};

    let distanceX = Math.pow(point1.x - point2.x,2);
    let distanceY = Math.pow(point1.y - point2.y,2);
    return Math.sqrt(distanceX + distanceY);
}

console.log(distanceBetweenTwoPoints(2.34, 15.66, -13.55, -2.9985));