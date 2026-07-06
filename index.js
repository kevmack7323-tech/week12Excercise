import dotenv from "dotenv";
import express from 'express';
import connectDB from "db.js";
import productControllers from "routes.js"
dotenv.config();
import express from 'express';
import connectDB from "./db.js";
const PORT = 3000;
const app = express();



app.use('/routes');

app.use('/', async (req, res, next) => {
    next();
});



app.listen(PORT, () => {
    connectDB()

    console.log('listening on port..', PORT)
});
