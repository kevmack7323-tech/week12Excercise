export const getAllRoutes = (req, res) =>{
import Products from "../models/products.js";

export const getAllRoutes = (req, res) => {

export const getRoutebyID = async (req, res) =>{
    try {
         const { id } = req.params;
        const route = await Route.findById(id);
        if (!route) {
            return res.status(404).json({ message: "Route not found" });
        }
        res.status(200).json(route);
    } catch (err) {
        console.log("could not get route:", err);
        res.status(500).json({ 'Error': err.message });
    }
};

export const createRoute = (req, res) =>{
    
}

export const updateRoute = (req, res) =>{
    
}

export const deleteRoute = (req,res) =>{
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