'use strict';
function colorfullNumbers(count) {
    let result = '<ul>\n';
    for (let i = 1; i <=count ; i++) {
        let color = (i % 2 === 1) ? "green" : "blue";
        result += `<li><span style="color:${color}">${i}</span></li>\n`;
    }
        result+=`</ul>\n`;
        console.log(result);
}


colorfullNumbers(10);

