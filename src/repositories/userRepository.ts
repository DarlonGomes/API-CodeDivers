import db from "../database/prisma";
import { Account } from "../interfaces/userInterface";

export async function create (account: Account){
 await db.user.create({
        data: account
    });
}

export async function search (field: string, value: string){
    const account = await db.user.findUnique({
        where:{
            [field] : value
        }
    });
    return account
}

export async function update (field: string, value:string, id:string){
    const update = await db.user.update({
        where: {
            id: id
        },
        data:{
            [field]: value
        }
    })
    return update
}