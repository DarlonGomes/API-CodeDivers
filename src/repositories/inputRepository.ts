import { Input } from "@prisma/client";
import db from "../database/prisma";

export async function findByChallenge (id: string){
    const inputList: Input[] = await db.input.findMany({
        where:{
            challengeId: id
        }
    });
    return inputList
}