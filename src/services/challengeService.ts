import { ErrorInfo } from "../middlewares/error";
import { challengeRepository } from "../repositories";
import { InsertChallenge } from "../interfaces/challengeInterface";
import { Challenge } from "@prisma/client";
import { attemptService } from ".";



export async function ensureThatChallengeDoesNotExist(title: string){
    const challenge = await challengeRepository.search(title);
    console.log(challenge)
    if(challenge) throw new ErrorInfo("error_conflict", "This challenge title already exists");
}

export async function insertNewChallenge(data: InsertChallenge){
    const challenge : Challenge = await challengeRepository.create(data)
    return challenge
}

export async function getChallengeById(id: string | any){
    const challenge : Challenge | null = await challengeRepository.search(id);
    if(!challenge) throw new ErrorInfo("error_not_found", "This challenge doesn't exist")
    return challenge
}

export async function checkIfUserAlreadyMadeAnAttempt(user: string , challenge: string | any){
    const attempt = attemptService.getAttempt(user, challenge);
    return attempt
}

export async function gatherInfoAndAttemps(user: string , challenge: string | any){
    let response;

    response = await getChallengeById(challenge);
    const attempt = await checkIfUserAlreadyMadeAnAttempt(user, challenge);
  
    if(!attempt){
        await attemptService.insertAttempt(user, challenge, response.code);
        return response
    }
    response.code = attempt.attempt
    return {...response, isSolved : attempt.isSolved}
}