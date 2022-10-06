import { Router } from "express";
import summaryRouter from "./summaryRouter";
import authRouter from "./userRouter";
const router = Router();

router.use("/auth", authRouter);
router.use("/summary", summaryRouter)
export default router;
