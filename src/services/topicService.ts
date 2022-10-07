import { ErrorInfo } from "../middlewares/error";
import { topicRepository } from "../repositories";
import { InsertTopic } from "../interfaces/topicInterface";



export async function ensureThatTopicIsValid(field:string, value: string){
    const topic = await topicRepository.search(field, value);
    if(field === "title" && topic)   throw new ErrorInfo("error_conflict", "This topic title already exists");
    if(field === "id" && !topic) throw new ErrorInfo("error_not_found", "This topic didn't exist")
}

export async function insertNewTopic(data: InsertTopic){
    await topicRepository.create(data)
}

export async function gatherAllChallengesFromThisTopic(id: string | any){
    const topic = await topicRepository.findChallenges(id);
    return topic
}