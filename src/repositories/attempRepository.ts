import { UserChallenge } from "@prisma/client";
import db from "../database/prisma";

interface SimpleAttempt {
    attempt: string;
    isSolved: boolean
}

export async function create( user: string, challenge:string, attempt: string){
    const response : UserChallenge = await db.userChallenge.create({
        data:{
            challengeId: challenge,
            userId: user,
            attempt: attempt
        }
    });

    return response
}

export async function findByUserAndChallenge(user: string, challenge: string){
    const response : SimpleAttempt | null = await db.userChallenge.findUnique({
        select:{
            attempt: true,
            isSolved: true
        },
        where:{
            challengeId_userId:{
                userId: user,
                challengeId: challenge
            }
        }
    });
    return response
}