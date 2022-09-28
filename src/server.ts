import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers";

dotenv.config();
const app = express();

app.use(cors());
app.use(json());
app.use(router);

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT);
