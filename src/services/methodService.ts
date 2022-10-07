import { ErrorInfo } from "../middlewares/error";
import { methodRepository } from "../repositories";
import { InsertMethod } from "../interfaces/methodInterface";



export async function ensureThatMethodDoesNotExist(title: string){
    const method = await methodRepository.search(title);
    if(method) throw new ErrorInfo("error_conflict", "This method title already exists");
}

export async function insertNewMethod(data: InsertMethod){
    await methodRepository.create(data)
}

export async function gatherAllTopicsFromThisMethod(id: string | any){
    const method = await methodRepository.findTopics(id);
    return method
}