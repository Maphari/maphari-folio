import dotenv from "dotenv";
import express, { Express } from "express";
import sendEmail from "./routes/sendEmail"

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sendEmail)

app.listen(process.env.PORT);
