import Products from "../models/products.js";

export const getAllRoutes = (req, res) => {

}

export const getRoutebyID = (req, res) => {

}

export const createRoute = async (req, res) => {
    try {
        const { learner_id, class_id, scores } = req.body;

        const newProduct = new Products({
            learner_id,
            class_id,
            scores
        });
        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (err) {
        console.log("could not post data:", err);
        res.status(500).json({'Data not posted': err.message})

    }
};

export const updateRoute = (req, res) => {

}

export const deleteRoute = (req, res) => {

}