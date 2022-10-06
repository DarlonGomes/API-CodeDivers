import { Router } from "express";
import { tokenValidation } from "../middlewares";
import { joiValidation } from "../middlewares/joi";
import { userController } from "../controllers";

const authRouter = Router();

authRouter.post("/sign-in", joiValidation.signIn, userController.startSession);
authRouter.post("/sign-up", joiValidation.signUp, userController.createUser);
authRouter.patch("/update", joiValidation.userUpdate, tokenValidation, userController.fieldUpdate)
export default authRouter;
