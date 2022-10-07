import { Request, Response } from "express";
import { InsertMethod } from "../interfaces/methodInterface";
import { methodService, userService } from "../services";

export async function handleMethodInsertion( req: Request, res: Response){
    const request : InsertMethod = req.body;
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default");
    await methodService.ensureThatMethodDoesNotExist(request.title);
    await methodService.insertNewMethod(request);

    return res.status(201).json({message: "Succesfull."})
}

export async function gatherMethodTopics(req: Request, res:Response){
    const {userId} = res.locals.userId;
    const {id} = req.query;

    await userService.ensureFieldIsValid("id", userId, "default");
     const methodWithTopics = await methodService.gatherAllTopicsFromThisMethod(id);

    return res.status(200).json({message: "Succesfull", list: methodWithTopics})
}