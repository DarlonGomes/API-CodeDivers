import { Router } from "express";
import { tokenValidation } from "../middlewares";
import { joiValidation } from "../middlewares/joi";
import { userController } from "../controllers";

export const authRouter = Router();

authRouter.get("/search", joiValidation.emailSearch, userController.handleEmailCheck)

authRouter.post("/sign-in", joiValidation.signIn, userController.startSession);
authRouter.post("/sign-up", joiValidation.signUp, userController.createUser);

authRouter.patch("/update", joiValidation.userUpdate, tokenValidation, userController.fieldUpdate)

