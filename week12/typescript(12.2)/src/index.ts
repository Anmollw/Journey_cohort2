interface User {
    name : string;
    age : number;
};

function sumofage (user1 : User, user2 : User){
    return user1.age + user2.age;
}

const ageprint = sumofage({name: "Anmol", age : 19},{name : "XYZ", age : 60});
console.log(ageprint);