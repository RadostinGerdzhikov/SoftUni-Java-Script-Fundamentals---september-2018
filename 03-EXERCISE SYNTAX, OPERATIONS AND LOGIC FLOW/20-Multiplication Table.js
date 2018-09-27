'use strict';
function table(number) {
    number = +number;
    let html="";
    html+="<table border='1'>\n";
    html+=`\t<tr><th>x</th>`

    for (let i = 1; i <= number ; i++) {
        html+=`<th>${i}</th>`;
    }
    html+=`</tr>\n`;


    for (let row=1; row <=number; row++) {
        html+=`\t<tr><th>${row}</th>`;
        for (let j = 1; j <=number ; j++) {
            html+=`<td>${row*j}</td>>`;

        }
        html+=`</tr>\n`;
    }
    html+=`</table>\n`;
    console.log(html);

}
table(5);