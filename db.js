import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected: ${conn.connection.host}');
    } catch (error) {
        console.error('Error: ${error.message}');
        process.exit(1);
    }
};

export default connectDB;


// Whem someone calls connectDB, try to conenct to the database. 
// This is an async function

// try = attempt the database connection
// catch = handle to eror if it fails
// this is basically error handling