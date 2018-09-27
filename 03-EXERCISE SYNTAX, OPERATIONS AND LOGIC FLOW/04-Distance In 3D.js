'use strict';
function printDistanceBetweenTwoPointsIn3D([num1,num2,num3,num4,num5,num6]) {
  let distance = Math.sqrt((num1-num4)**2 + (num2-num5)**2 + (num3-num6)**2);
    console.log(distance);
}
printDistanceBetweenTwoPointsIn3D([1, 1, 0, 5, 4, 0]);
printDistanceBetweenTwoPointsIn3D([3.5, 0, 1, 0, 2, -1]);