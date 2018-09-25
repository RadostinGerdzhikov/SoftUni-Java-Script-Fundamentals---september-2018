'use strict';
function printColorNumbers(count) {
    let result = `<ul>\n`;
    for (let i = 1; i <= count; i++) {
        let color = (i % 2 === 1) ? "green" : "blue";

        //result += `<ul>\n`;
        result += `<li><span style="color:${color}">${i}</li></span>\n`
        //result += `</ul>\n`;

    }

    result += `</ul>\n`;
    console.log(result);


}

printColorNumbers(10);