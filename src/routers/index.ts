import { Router } from "express";
import methodRouter from "./methodRouter";
import summaryRouter from "./summaryRouter";
import topicRouter from "./topicRouter";
import authRouter from "./userRouter";
const router = Router();

router.use("/auth", authRouter);
router.use("/summary", summaryRouter);
router.use("/method", methodRouter);
router.use("/topic", topicRouter)
export default router;
