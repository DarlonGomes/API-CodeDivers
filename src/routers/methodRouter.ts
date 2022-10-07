import { Router } from "express";
import { methodController } from "../controllers";
import { tokenValidation, joiValidation } from "../middlewares";

export const methodRouter = Router();

methodRouter.post("/create", tokenValidation, joiValidation.methodInsertion, methodController.handleMethodInsertion);
methodRouter.get("", tokenValidation, methodController.gatherMethodTopics)


