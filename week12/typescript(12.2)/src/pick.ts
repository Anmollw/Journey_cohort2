interface User2 {
    name : string;
    age : number;
    email : string;
    password : string;
};


type updateprops = Pick<User2, "name"| "age">;

function updateuser(updateprops : updateprops){

}