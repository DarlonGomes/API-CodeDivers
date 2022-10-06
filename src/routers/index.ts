import { Router } from "express";
import authRouter from "./userRouter";
const router = Router();

router.use("/auth", authRouter)
export default router;
