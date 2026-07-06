import mongoose from "mongoose";

const airlineSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        alias: { type: String, required: true },
        iata: { type: String, required: true }
    },
    { _id: false }
);

const routeSchema = new mongoose.Schema(
    {
        airline: { type: airlineSchema, required: true },

        src_airport: { type: String, required: true },
        dst_airport: { type: String, required: true },
        codeshare: { type: String, default: "" },
        stops: { type: Number, required: true },
        airplane: { type: String, required: true }
    },
    { timestamps: true }
);

const Route = mongoose.model("Route", routeSchema);

export default Route;


