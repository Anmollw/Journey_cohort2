function identity<T>(arg : T) :T {
    return arg;
}

let output1 = identity<string>("mystring1");
let output2 = identity<number>(10000);

output1.toUpperCase();
output2.valueOf();

//conclusion sol:

function getfirstelement<T>(arr : T[]): T{
    return arr[0];
}

let xyz =getfirstelement(["Anmol","Wadhwa"]);
let xyz2 = getfirstelement([1,2,3,4,5,6])
console.log(xyz.toUpperCase());
console.log(xyz2); 

//hence won't give an compile error and can figure out the whole thing is num or str so we can use the uppercase , valueof func , etc.