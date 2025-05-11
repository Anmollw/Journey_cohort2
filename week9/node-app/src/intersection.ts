type Employee2 = {
    name : string;
    startdate : number;
}

interface Manager {
    name : string;
    department : string;
}

type techlead = Employee2 & Manager;

const t : techlead = {
    name : "Anmol",
    department : "SWE",
    startdate : 12,
}