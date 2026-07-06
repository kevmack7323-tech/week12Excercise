import express from 'express';
const PORT = 3000;
const app = express();

app.use('/', async(req, res, next) =>{
    next();
});



app.listen( PORT, ()=>{
    console.log('listening on port..', PORT)
});
