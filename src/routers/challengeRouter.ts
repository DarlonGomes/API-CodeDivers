import { Router } from "express";
import {challengeController} from "../controllers";

import { tokenValidation, joiValidation } from "../middlewares";


export const challengeRouter = Router();

challengeRouter.post("/create", tokenValidation, joiValidation.challengeInsertion, challengeController.handleChallengeInsertion);
challengeRouter.get("", tokenValidation, challengeController.gatherChallengeInfo);

