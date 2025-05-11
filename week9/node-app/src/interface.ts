
interface User {
    firstname : string;
    lastname : string;
    age : number;
    email?: string;
};

function isLegalitf(user : User){
    if (user.age > 18){
        return true;
    } else {
        return false;
    }
}

function greet(user : User){
    console.log(`Hello ${user.firstname}`);
}

let xy = isLegalitf({
    firstname : "Anmol",
    lastname : "Wadhwa",
    age : 20
})

greet({
    firstname : "Anmol",
    lastname : "Wadhwa",
    age : 20
})

console.log(xy);
