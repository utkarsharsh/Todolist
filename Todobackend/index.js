import express from "express";
import cors from 'cors'
import dotenv from 'dotenv';
import { Router } from "express";
import dbconnect from "./config/db.js"
import routes from "./routes/routes.js"
const app=express();
dotenv.config();
dbconnect();
app.use(express.json());
app.use(cors());
app.use("/api",routes);
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(port);
})

