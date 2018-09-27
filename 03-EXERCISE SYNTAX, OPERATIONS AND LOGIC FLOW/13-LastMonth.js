'use strict';
function lastDayOfPrevioslyMonth([day,month,year]){
    let date = new Date(year,month-1,0);
    let days=date.getDate();
    console.log(days);
}

lastDayOfPrevioslyMonth([2002,3,17]);

