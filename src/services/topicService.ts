import { ErrorInfo } from "../middlewares/error";
import { topicRepository } from "../repositories";
import { InsertTopic } from "../interfaces/topicInterface";



export async function ensureThatTopicDoesNotExist(title: string){
    const topic = await topicRepository.search(title);
    if(topic) throw new ErrorInfo("error_conflict", "This topic title already exists");
}

export async function insertNewTopic(data: InsertTopic){
    await topicRepository.create(data)
}

export async function gatherAllChallengesFromThisTopic(id: string | any){
    const topic = await topicRepository.findChallenges(id);
    return topic
}