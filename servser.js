import express from "express";
import dotenv from "dotenv";
import Routes from "./routes/index.routes.js";

dotenv.config();
const app = express();

app.use(express.json())

app.use("/api", Routes)

app.listen(process.env.PORT, ()=>{ console.log("Server ishlamoqda ...")});

