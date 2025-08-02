import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app=express()
import UserRouter from "./routers/user.router.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors())
app.use("/contact",UserRouter);
app.listen(3001);
console.log("server started at http://localhost:3001");
