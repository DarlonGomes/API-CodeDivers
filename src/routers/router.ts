import { Router } from "express";
import { authRouter, summaryRouter, methodRouter, topicRouter, challengeRouter } from "../routers";
const router = Router();

router.use("/auth", authRouter);
router.use("/summary", summaryRouter);
router.use("/method", methodRouter);
router.use("/topic", topicRouter);
router.use("/challenge", challengeRouter);

export default router;
