export const getAllRoutes = (req, res) =>{

}

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