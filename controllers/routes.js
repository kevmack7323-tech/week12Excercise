import Products from "../models/products.js";

export const getAllRoutes = (req, res) => {

}

export const getRoutebyID = (req, res) => {

}

export const createRoute = async (req, res) => {
    try {
        const { airline, src_airport, dst_aiport, codeshare, stops, airplane } = req.body;

        const newRoute = new Route({
            airline, 
            src_airport, 
            dst_aiport, 
            codeshare, 
            stops, 
            airplane
        });
        const savedRoute = await newRoute.save();

        res.status(201).json(savedRoute);
    } catch (err) {
        console.log("could not post data:", err);
        res.status(500).json({ 'Data not posted': err.message })

    }
};

export const updateRoute = (req, res) => {

}

export const deleteRoute = (req, res) => {

}