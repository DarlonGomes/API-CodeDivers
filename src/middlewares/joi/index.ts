import { Request, Response, NextFunction } from "express";
import { ErrorInfo } from "../error";
import {authSchema} from "../../schemas";

export const joiValidation = {
    signUp: (req: Request, _res:Response, next: NextFunction) => {
        const request = req.body;
        const validation = authSchema.signUp.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    signIn: (req: Request, _res:Response, next: NextFunction) => {
        const request = req.body;
        const validation = authSchema.signIn.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    userUpdate: (req: Request, _res:Response, next: NextFunction) => {
        const request = req.body;
        const validation = authSchema.update.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    }
    
}