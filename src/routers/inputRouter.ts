import Router from "express";
import { inputController } from "../controllers";
import { tokenValidation, joiValidation } from "../middlewares";

export const inputRouter = Router();

inputRouter.post("/create", joiValidation.inputInsertion, tokenValidation, inputController.handleInputInsertion);

inputRouter.patch("", joiValidation.inputUpdate, tokenValidation, inputController.handleInputUpdate);

inputRouter.delete("", tokenValidation, inputController.handleInputDelete);
inputRouter.delete("/challenge", tokenValidation, inputController.handleChallengeInputsDelete);
