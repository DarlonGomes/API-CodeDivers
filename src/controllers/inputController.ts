import { Request, Response } from "express";
import { inputService, userService } from "../services";

export async function handleInputInsertion (req: Request, res: Response){
    const { output, input , challengeId} = req.body;
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default");
    await inputService.ensureThatThisInputDoesNotExistInThisChallenge(input, output, challengeId);
    const test = await inputService.insertInputData(input, output, challengeId);

    return res.status(201).json({message: "Sucessfull", test})
}

export async function handleInputUpdate (req: Request, res: Response){
    const { field, value, id} = req.body;
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default");
    await inputService.updateAnExistingInput(field, value, id);

    return res.status(204).json({message: "Successfull update"})
}

export async function handleInputDelete (req: Request, res: Response){
    const {inputId} = req.query;
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default");
    await inputService.handleInputRemotion(inputId);

    return res.status(204).json({message: "Deleted"})
}

export async function handleChallengeInputsDelete (req: Request, res: Response){
    const {challengeId} = req.query;
    const {userId} = res.locals.userId;

    await userService.ensureFieldIsValid("id", userId, "default");
    await inputService.handleInputRemotionByChallenge(challengeId);

    return res.status(204).json({message: "Deleted all inputs from this challenge"})
}