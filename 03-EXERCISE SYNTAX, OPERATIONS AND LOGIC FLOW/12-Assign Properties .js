'use strict';
function makeDataObject(data) {
 let object = {};
 object[data[0]] = data[1];
 object[data[2]] = data[3];
 object[data[4]] = data[5];

    console.log(object);


}

makeDataObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);
makeDataObject(['ssid', '90127461', 'status', 'admin', 'expires', '600']);

