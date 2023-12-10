import express from "express"
import { TourController } from "./tour.controller"

const router = express.Router()
router.post("/", TourController.createTour)
router.get("/", TourController.getTours)
router.get("/:id", TourController.getTour)
router.patch("/:id", TourController.updateTour)
router.delete("/:id", TourController.deleteTour)


export const tourRoutes = router