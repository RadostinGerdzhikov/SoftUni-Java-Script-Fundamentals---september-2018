'use strict';
function roundingNum(data) {
    let num = +data[0];
    let precision = +data[1];
    // console.log(typeof(num));
    // console.log(typeof(precision));

    if (precision > 15){
        precision = 15;
    }

    console.log(+num.toFixed(precision));


}


roundingNum([10.5,3]);
