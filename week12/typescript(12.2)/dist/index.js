"use strict";
;
function sumofage(user1, user2) {
    return user1.age + user2.age;
}
const ageprint = sumofage({ name: "Anmol", age: 19 }, { name: "XYZ", age: 60 });
console.log(ageprint);
