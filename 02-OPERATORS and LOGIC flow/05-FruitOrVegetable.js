'use strict';

// само си дава входа

function fruitOrVegatbles(input) {

    switch (input) {

        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lеmon":
        case "grapes":
        case "peach":
            console.log("fruit");
            break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            console.log("vegetable ");
            break;
        default:
            console.log("unknown");
            break;

    }


}

fruitOrVegatbles("banana");
fruitOrVegatbles("pizza");
fruitOrVegatbles("tomato");