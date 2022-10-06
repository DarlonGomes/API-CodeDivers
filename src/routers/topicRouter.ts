import { Router } from "express";
import { topicController } from "../controllers";
import { tokenValidation, joiValidation } from "../middlewares";

const topicRouter = Router();

topicRouter.post("/create", tokenValidation, joiValidation.topicInsertion, topicController.handleMethodInsertion);
topicRouter.get("", tokenValidation, topicController.gatherMethodTopics)

export default topicRouter;
