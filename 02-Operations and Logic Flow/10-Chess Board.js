'use strict';

function chessBoard(size) {
    let result = `<div class="chessboard">\n`;
    for (let row = 0; row < size; row++) {
        result += ` <div>\n`;

        let color = (row % 2 === 0) ? "black" : "white";

        for (let col = 0; col < size; col++) {
            result += `  <span class="${color}"></span>\n`;

            color = (color === "black") ? "white" : "black";
        }

        result += ` </div>\n`;
    }
    console.log(result += `</div>`);
}


chessBoard(10);