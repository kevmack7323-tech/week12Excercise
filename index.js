import dotenv from "dotenv";
<<<<<<< isaias
import express from 'express';
import connectDB from "db.js";
=======
>>>>>>> main
dotenv.config();
import express from 'express';
import connectDB from "./db.js";
const PORT = 3000;
const app = express();

app.use('/', async (req, res, next) => {
    next();
});



<<<<<<< isaias
app.listen(PORT, () => {
=======
app.listen( PORT, ()=>{
    connectDB()
>>>>>>> main
    console.log('listening on port..', PORT)
});
