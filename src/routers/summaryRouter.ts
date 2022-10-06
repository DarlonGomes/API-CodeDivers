import { Router } from "express";
import { summaryController } from "../controllers";
import { tokenValidation, joiValidation } from "../middlewares";

const summaryRouter = Router();

summaryRouter.post("/create", tokenValidation, joiValidation.summaryInsertion, summaryController.handleSummaryInsertion);
summaryRouter.get("", tokenValidation, summaryController.gatherAllSummariesAndMethods);

export default summaryRouter;
