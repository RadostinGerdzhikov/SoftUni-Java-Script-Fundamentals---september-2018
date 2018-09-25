'use strict';
function generateChessBoard(size) {
    let result = '<div class="chessboard">\n';

    for (let i = 0; i < size ; i++) { // tozi for е за редовете
        result += '  <div>\n';
        let color = (i % 2 === 0) ? "black" : "white";
        // vyrtim nov cikyl za вътрешните спанове
        for (let j = 0; j < size ; j++) { // a tozi for e za kolonite
        // span - elementi v reda veroqtno
        result += `    <span class="${color}"></span>\n`;
        color = (color === "black") ? "white" : "black";
        }

        // div e broqt na redovete veroqtno
        result += ' </div>\n';
    }
        console.log(result + `</div>\n`);

}

generateChessBoard(10);