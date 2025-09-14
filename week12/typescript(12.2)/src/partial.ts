interface User3 {
    name : string;
    age : number;
    email : string;
    password : string;
};

type propsupdated = Pick<User3,"name" | "age" | "email">
type optionalprops = Partial<propsupdated>

function updateuserx(updateprops: optionalprops){

}