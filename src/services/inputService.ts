import { inputRepository } from "../repositories";
import { Input } from "@prisma/client";


export async function insertInputData ( challengeId: string, input: string, output:string){
    await inputRepository.create(challengeId, input, output);
}

export async function gatherChallengeInputsAndOutputs ( challengeId: string){
    const inputList : Input[] = await inputRepository.findByChallenge(challengeId);
    return inputList;
}

export async function handleInputRemotion ( id : string){
    await inputRepository.remove(id);
}

export async function handleInputRemotionByChallenge ( challengeId: string){
    await inputRepository.removeAllInputFromChallenge(challengeId);
}

export async function updateAnExistingInput (field: string, value:string, id:string){
    const input = await inputRepository.update(field, value, id);
    return input
}