import { Request, Response } from "express";
import { tourServices } from "./tour.services";

const createTour = async (req: Request, res: Response) => {
      try {
            const user = req.body
            const result = await tourServices.createTourIntoDB(user)
            res.status(201).json({
                  status: "success",
                  message: "User Created Successfully",
                  data: result
            })
      } catch (error: any) {
            res.status(5001).json({
                  status: "fail",
                  message: error.message || "something went wrong"
            })
      }

}
const getTours = async (req: Request, res: Response) => {
      try {
            const result = await tourServices.getToursFromDB()
            res.status(201).json({
                  status: "success",
                  message: "Users Fetched Successfully",
                  data: result
            })
      } catch (error: any) {
            res.status(5001).json({
                  status: "fail",
                  message: error.message || "something went wrong"
            })
      }

}
const getTour = async (req: Request, res: Response) => {
      try {
            const { id } = req.params
            const result = await tourServices.getTourFromDB(id)
            res.status(201).json({
                  status: "success",
                  message: "User Fetched Successfully",
                  data: result
            })
      } catch (error: any) {
            res.status(5001).json({
                  status: "fail",
                  message: error.message || "something went wrong"
            })
      }

}
const updateTour = async (req: Request, res: Response) => {
      try {
            const user = req.body
            const { id } = req.params
            const result = await tourServices.updateTourInDB(id, user)
            res.status(201).json({
                  status: "success",
                  message: "User Updated Successfully",
                  data: result
            })
      } catch (error: any) {
            res.status(5001).json({
                  status: "fail",
                  message: error.message || "something went wrong"
            })
      }

}

const deleteTour = async (req: Request, res: Response) => {
      try {
            const { id } = req.params
            await tourServices.deleteTourInDB(id)
            res.status(201).json({
                  status: "success",
                  message: "User Deleted Successfully",
                  data: null
            })
      } catch (error: any) {
            res.status(5001).json({
                  status: "fail",
                  message: error.message || "something went wrong"
            })
      }

}

export const TourController = {
      createTour,
      getTour,
      getTours,
      updateTour,
      deleteTour
}
