import { Router } from "express";
import { tokenValidation } from "../middlewares";
import { joiValidation } from "../middlewares/joi";

const auth = Router();

auth.post("/sign-in", joiValidation.signIn ,tokenValidation);
auth.post("/sign-up", joiValidation.signUp)
export default auth;
