import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
    const res = await prisma.user.create({
        data : {
            email: username,
            password,
            firstname,
            lastname
        },
        select:{
            id: true,
            firstname: true
        }
    })

    console.log(res);
    
}

insertUser("anmol699@gmail.com","12345","Anmol","Wadhwa");
