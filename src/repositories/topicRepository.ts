import db from "../database/prisma";
import { InsertTopic, Topic_Challenge } from "../interfaces/topicInterface";

export async function create (data: InsertTopic){
    await db.topic.create({
        data:{
            title: data.title,
            methodId: data.methodId
        }
    })
}

export async function findChallenges (id: string){
    const topicList : Topic_Challenge[] = await db.topic.findMany({
        select:{
            id: true,
            title: true,
            methodId: true,
            created_at: true,
            challenges:{
                select:{
                    id: true,
                    title: true,
                    description: true,
                    code:true,
                    solution: true,
                    topicId: true,
                    created_at: true,
                }
            }
        }, where:{
            id: id
        }
    });

    return topicList
}

export async function search (field:string, value: string){
    const topic = await db.topic.findUnique({
        where:{
            [field]: value
        }
    });
    return topic
}