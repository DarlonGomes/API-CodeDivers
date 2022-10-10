
import { Request, Response } from "express";
import { AccountRequest, Login, Update, UserData } from "../interfaces/userInterface";
import { userService } from "../services";

export async function createUser (req: Request, res: Response) {
    const request : AccountRequest = req.body;
    
    await userService.ensureFieldIsValid("email", request.email, "sign-up");
    delete request.confirmPassword;
    const account = await userService.encryptUserPassword(request);
    await userService.insertRequest(account);

    res.status(201).json({message:"Your account has been created"});
}

export async function startSession(req: Request, res: Response){
    const request : Login = req.body;
    const account : UserData | null  = await userService.ensureFieldIsValid("email", request.email, "sign-in");
    await userService.ensurePasswordIsValid(request.password, account!.password!);
    const config = await userService.generateAccessToken(account!.id);
    delete account!.password
    
    return res.status(200).json({user: account, config: config})
}

export async function fieldUpdate(req: Request, res: Response){
    const {field, value}: Update = req.body;
    const {userId} = res.locals.userId;
    await userService.ensureFieldIsValid("id", userId, "default");
    const account = await userService.updateField(field, value, userId)

    return res.status(204).json({message: `Your ${field} have been updated.`, account: account})
}

export async function handleEmailCheck(req: Request, res: Response){
    const {email} : {email: string} = req.body;

    await userService.searchForThisEmail(email);
    
    return res.sendStatus(200);
}