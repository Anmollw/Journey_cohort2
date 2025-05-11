function isLegal(age : number){
    if(age>18){
        return true;
    } else{
        return false;
    }
    
}

let x = isLegal(20);
console.log(x);