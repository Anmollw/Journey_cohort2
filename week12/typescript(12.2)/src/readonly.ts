type user9 = {
    readonly name : string;
    readonly age : number;
}

const obj : user9 = {
    name : "Anmol",
    age : 20 
}

// obj.age = 22; (commenting out to remove errors)

// or 

type usertest = {
    name : string;
    age : number;
}

const testobj : Readonly<usertest> = {
    name : "Anmol",
    age : 20 
}

// obj.age = 22; (commenting out to remove errors)
