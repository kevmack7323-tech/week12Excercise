import dotenv from "dotenv";
<<<<<<< isaias
import express from 'express';
import connectDB from "db.js";
<<<<<<< HEAD
import productControllers from "routes.js"
=======
=======
>>>>>>> main
>>>>>>> f4b1025d21e8baec43778f832d15ec5f5be512dc
dotenv.config();
import express from 'express';
import connectDB from "./db.js";
const PORT = 3000;
const app = express();



app.use('/routes');

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
