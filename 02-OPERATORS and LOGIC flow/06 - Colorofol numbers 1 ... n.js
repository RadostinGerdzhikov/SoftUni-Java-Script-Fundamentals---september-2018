'use strict';
function generateNumbers(count) {
    let result = '<ul>\n';
    for (let i = 1; i <= count ; i++) {

        if (i % 2 === 1){
            result += `  <li><span style=color:green>${i}</span></li>\n`;
            //console.log(result += '<ul>');
        }else{
            result += `  <li><span style=color:blue>${i}</span></li>\n`;
           // console.log(result += '<ul>');

        }
    }
            console.log(result += '</ul>');
}

generateNumbers(10);