'use strict';
function numberBoxes(numBottles,capacityBox) {
    let result = Math.ceil(numBottles/capacityBox);
    console.log(result);
}
numberBoxes(15,7);