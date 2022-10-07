import { Request, Response } from "express";
import { InsertTopic } from "../interfaces/topicInterface";
import { topicService, userService } from "../services";

export async function handleMethodInsertion( req: Request, res: Response){
    const request : InsertTopic = req.body;
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default");
    await topicService.ensureThatTopicIsValid("title",request.title);
    await topicService.insertNewTopic(request);

    return res.status(201).json({message: "Succesfull."})
}

export async function gatherMethodTopics(req: Request, res:Response){
    const {userId} = res.locals.userId;
    const {id} = req.query;

    await userService.ensureFieldIsValid("id", userId, "default");
     const methodWithTopics = await topicService.gatherAllChallengesFromThisTopic(id);

    return res.status(200).json({message: "Succesfull", list: methodWithTopics})
}