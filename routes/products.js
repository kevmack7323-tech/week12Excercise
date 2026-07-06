import express from "express";
import {
  getAllRoutes,
  getRoutebyID,
  createRoute,
  updateRoute,
  deleteRoute,
} from " .js";

const router = express.Router();

router.get("/", (getAllRoutes) => {});

router.get("/:id", (getRoutebyID) => {});

router.post("/", (createRoute) => {});

router.patch("/", (updateRoute) => {});

router.delete("/", (deleteRoute) => {});

export default router;
