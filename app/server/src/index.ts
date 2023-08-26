import express, { Express, Request, Response } from "express";
import sendEmail from "./routes/sendEmail";
import next from "next";
import { NextServer } from "next/dist/server/next";
import dotenv from "dotenv"
import cors from "cors";

dotenv.config()

const dev: boolean = process.env.NODE_ENV !== "production";

const hostname: string = "localhost";
const port: number = 3000;
const app: NextServer = next({ dev, hostname, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server: Express = express();
  server.use(cors());
  server.use(express.json());

  server.use(express.urlencoded({ extended: true }));

  server.use(sendEmail);

  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT);
});
