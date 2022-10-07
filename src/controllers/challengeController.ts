import { Challenge } from "@prisma/client";
import { Response, Request} from "express";
import { InsertChallenge } from "../interfaces/challengeInterface";
import {challengeService,  userService, topicService} from "../services";

export async function handleChallengeInsertion (req: Request, res:Response){
    const request : InsertChallenge = req.body;
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default")
    await topicService.ensureThatTopicIsValid("id", request.topicId);

    await challengeService.ensureThatChallengeDoesNotExist(request.title);
    const challenge : Challenge = await challengeService.insertNewChallenge(request);
    return res.status(201).json({message:"Succesfull", challenge})
}

export async function gatherChallengeInfo (req: Request, res: Response){
    const {userId} = res.locals.userId;
    const {id} = req.query;

    await userService.ensureFieldIsValid("id", userId, "default");
    const challenge = await challengeService.gatherInfoAndAttemps(userId, id);


    return res.status(200).json({message: "Succesfull", challenge})
}
