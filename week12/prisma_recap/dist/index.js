import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function getTodoanduserdetails(userId) {
    const response = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            user: true
        }
    });
    console.log(response);
}
//# sourceMappingURL=index.js.map