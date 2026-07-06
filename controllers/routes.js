import Route from "../models/routes.js";

export const getAllRoutes = (req, res) = {

}

export const getRoutebyID = (req, res) = {

}

export const createRoute = (req, res) = {

}


export const updateRoute = async (req, res) => {

    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedRoute = await Route.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedRoute) {
            return res.status(404).json({ message: "Route not found" });
        }

        res.status(200).json(updatedRoute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




export const deleteRoute = (req, res) = {

}