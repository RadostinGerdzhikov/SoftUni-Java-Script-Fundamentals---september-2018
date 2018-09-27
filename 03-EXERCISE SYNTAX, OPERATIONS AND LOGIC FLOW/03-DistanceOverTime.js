'use strict';

function printDistance([num1,num2,num3]) {
    let car1TimeMetresInSeconds = (num1*1000)/3600;
    let car2TimeMetresInSeconds = (num2*1000)/3600;
    let car1Distance = car1TimeMetresInSeconds*num3;
    let car2Distance = car2TimeMetresInSeconds*num3;
    console.log(Math.abs(car1Distance-car2Distance));
}
printDistance([11,10,120]);
printDistance([5,-5,40]);
printDistance([0,60,3600]);