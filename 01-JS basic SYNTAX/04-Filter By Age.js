'use strict';
function minAge(minAge,name,age,name1,age1) {
    let person = {name:name,age:age};
    let person2 = {name:name1,age:age1};

    if (person.age >= minAge){
        console.log(person);
    }
    if (person2.age >= minAge){
        console.log(person2);
    }
}

 minAge(12, 'Ivan', 15, 'Asen', 9);