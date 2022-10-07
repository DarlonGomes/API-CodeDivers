import { ErrorInfo } from "../middlewares/error";
import { attemptRepository } from "../repositories";




export async function getAttempt(user: string, challenge: string){
    const response = await attemptRepository.findByUserAndChallenge(user, challenge);
    if(!response) return false;
    return response
}

export async function insertAttempt(user: string, challenge: string, attempt: string){
    await attemptRepository.create(user, challenge, attempt)
}
