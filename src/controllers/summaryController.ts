import { Request, Response } from "express";
import { InsertSummary } from "../interfaces/summaryInterface";
import { summaryService, userService } from "../services";

export async function handleSummaryInsertion( req: Request, res: Response){
    const {title} : InsertSummary = req.body;
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default");
    await summaryService.ensureThatSummaryDoesNotExist(title);
    await summaryService.insertNewSummary(title);

    return res.status(201).json({message: "Succesfull."})
}

export async function gatherAllSummariesAndMethods(req: Request, res:Response){
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default");
    const summaryList = await summaryService.gatherAllSummaries();

    return res.status(200).json({message: "Succesfull", list: summaryList})
}