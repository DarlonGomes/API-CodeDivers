import { Input } from "@prisma/client";
import db from "../database/prisma";

export async function findByChallenge (challenge: string){
    const inputList: Input[] = await db.input.findMany({
        where:{
            challengeId: challenge
        }
    });
    return inputList
};

export async function create ( challenge:string, input: string, output: string){
    const response : Input = await db.input.create({
        data:{
            challengeId: challenge,
            input: input,
            output: output
        }
    });
    return response
};

export async function remove ( input: string){
    const response : Input = await db.input.delete({
        where:{
            id: input,
        }
    });
    return response
}

export async function removeAllInputFromChallenge (challenge: string){
    const response  = await db.input.deleteMany({
        where: {
            challengeId: challenge
        }
    });
    return response
}
export async function update (field: string, value: string, id: string){
    const response : Input = await db.input.update({
        data:{
            [field]: value,
        },
        where:{
            id: id
        }
    });
    return response
}

export async function findByInputOutputChallengeId(input: string, output:string, challengeId: string){
    const response : Input | null = await db.input.findFirst({
        where:{
            input: input,
            output: output,
            challengeId: challengeId
        }
    });
    return response
}