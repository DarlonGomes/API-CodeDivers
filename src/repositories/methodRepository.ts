import db from "../database/prisma";
import { Method_Topic, InsertMethod } from "../interfaces/methodInterface";

export async function create (data: InsertMethod){
    await db.method.create({
        data:data
    })
}

export async function findTopics (id: string){
    const methodList : Method_Topic[] = await db.method.findMany({
        select:{
            id: true,
            image: true,
            title: true,
            description: true,
            summaryId: true,
            created_at: true,
            topics:{
                select:{
                    id: true,
                    title: true,
                    methodId: true,
                    created_at: true,
                }
            }
        }, where:{
            id: id
        }
    });

    return methodList
}

export async function search (title: string){
    const method = await db.method.findUnique({
        where:{
            title: title
        }
    });
    return method
}