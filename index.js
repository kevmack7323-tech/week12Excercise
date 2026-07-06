import dotenv from "dotenv";
import express from 'express';
import connectDB from "./db";
dotenv.config();
const PORT = 3000;
const app = express()





app.listen( PORT, ()=>{
    console.log('listening on port..', PORT)
});

// git init
// git add .
// git commit -m "Initial commit: basic server setup"
// git branch -M main
// git remote add origin https://github.com/kevmack7323-tech/week12Excercise
// git push -u origin main