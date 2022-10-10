import db from "../database/prisma";
import { Challenge } from "@prisma/client";
import { InsertChallenge, Challenge_Input } from "../interfaces/challengeInterface";

export async function create (data: InsertChallenge){
    return await db.challenge.create({
        data:{
            title: data.title,
            description: data.description,
            code: data.code,
            solution: data.solution,
            topicId: data.topicId
        }
    })
}

export async function findByTopic (id: string){
    const challengeList : Challenge[] = await db.challenge.findMany({
       where:{
        topicId: id
       }
    });

    return challengeList
}

export async function search (id: string){
    const challenge : Challenge | null = await db.challenge.findUnique({
        where:{
            id: id
        }
    });
    return challenge
}

