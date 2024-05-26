import express from "express";
import cors from 'cors'
import { Router } from "express";
import dbconnect from "./config/db.js"
import routes from "./routes/routes.js"
const app=express();
dbconnect();
app.use(express.json());
app.use(cors());
app.use("/api",routes);

app.listen("3000",()=>{
    console.log("listening");
})

