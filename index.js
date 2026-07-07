import dotenv from "dotenv";
import express from 'express';
import connectDB from "db.js";
import productControllers from "routes.js"
dotenv.config();
import express from 'express';
import connectDB from "./db.js";
import productRoutes from "./routes/products.js";
const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/products', productRoutes)






app.listen(PORT, () => {
    connectDB()

    console.log('listening on port..', PORT)
});
