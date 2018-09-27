'use strict';
function composeHtmlTag(data) {
    console.log(`<img src="${data[0]}" alt="${data[1]}">`);
    
}
composeHtmlTag(['smiley.gif', 'Smiley Face']);