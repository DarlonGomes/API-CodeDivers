import { inputRepository } from "../repositories";
import { Input } from "@prisma/client";
import { ErrorInfo } from "../middlewares/error";

export async function insertInputData (  input: string, output:string, challengeId: string,){
    await inputRepository.create( input, output, challengeId,);
}

export async function gatherChallengeInputsAndOutputs ( challengeId: string){
    const inputList : Input[] = await inputRepository.findByChallenge(challengeId);
    return inputList;
}

export async function handleInputRemotion ( id : any){
    await inputRepository.remove(id);
}

export async function handleInputRemotionByChallenge ( challengeId: any){
    await inputRepository.removeAllInputFromChallenge(challengeId);
}

export async function updateAnExistingInput (field: string, value:string, id:string){
    const input = await inputRepository.update(field, value, id);
    return input
}

export async function ensureThatThisInputDoesNotExistInThisChallenge(input: string, output:string, challengeId:string){
    const response : Input | null = await inputRepository.findByInputOutputChallengeId(input, output, challengeId);
    if(response) throw new ErrorInfo("error_conflict", "This type os test already exist")    
}