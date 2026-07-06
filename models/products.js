import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    type: { type: String, required: true },
    score: { type: Number, required: true },
}, { _id: false });

const productsSchema = new mongoose.Schema({
    learner_id: { type: Number, required: true },
    class_id: { type: Number, required: true },
    scores: [scoreSchema],
});

// Use the correct schema name
const Products = mongoose.model("Products", productsSchema);

export default Products;
