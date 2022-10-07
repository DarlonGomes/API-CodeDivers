import { ErrorInfo } from "../middlewares/error";
import { summaryRepository } from "../repositories";
import { InsertSummary } from "../interfaces/summaryInterface";


export async function ensureThatSummaryDoesNotExist(title: string){
    const summary = await summaryRepository.search(title);
    if(summary) throw new ErrorInfo("error_conflict", "This summary title already exists");
}

export async function insertNewSummary(title: string){
    await summaryRepository.create(title)
}

export async function gatherAllSummaries(){
    const summaryList = await summaryRepository.findAll();
    return summaryList
}