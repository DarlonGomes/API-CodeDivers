import { Router } from "express";
import { methodController } from "../controllers";
import { tokenValidation, joiValidation } from "../middlewares";

const methodRouter = Router();

methodRouter.post("/create", tokenValidation, joiValidation.methodInsertion, methodController.handleMethodInsertion);
methodRouter.get("", tokenValidation, methodController.gatherMethodTopics)

export default methodRouter;
