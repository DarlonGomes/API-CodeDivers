import { Request, Response, NextFunction } from "express";
import { ErrorInfo } from "../error";
import {authSchema, summarySchema, methodSchema, topicSchema, challengeSchema, inputSchema} from "../../schemas";


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
    },
    summaryInsertion : (req: Request, _res: Response, next: NextFunction) => {
        const request = req.body;
        const validation = summarySchema.create.validate(request, { abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    methodInsertion : (req: Request, _res: Response, next: NextFunction) => {
        const request = req.body;
        const validation = methodSchema.create.validate(request, { abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    topicInsertion : (req: Request, _res: Response, next: NextFunction) => {
        const request = req.body;
        const validation = topicSchema.create.validate(request, { abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    challengeInsertion : (req: Request, _res: Response, next: NextFunction) => {
        const request = req.body;
        const validation = challengeSchema.create.validate(request, { abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    inputInserton : (req: Request, _res: Response, next: NextFunction) => {
        const request = req.body;
        const validation = inputSchema.create.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    }
    
}