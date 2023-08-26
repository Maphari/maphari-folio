import dotenv from "dotenv";
import express, { Express } from "express";
import sendEmail from "./routes/sendEmail";
import next from "next";

const server: Express = express();
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(sendEmail);
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(process.env.PORT);
});
