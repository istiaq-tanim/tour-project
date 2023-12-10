import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
      try {
            const user = req.body
            const result = await userServices.createUserIntoDB(user)
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
const getUsers = async (req: Request, res: Response) => {
      try {
            const result = await userServices.getUsersFromDB()
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

const getUser = async (req: Request, res: Response) => {
      try {
            const { id } = req.params
            const result = await userServices.getUserFromDB(id)
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

const updateUser = async (req: Request, res: Response) => {
      try {
            const user = req.body
            const { id } = req.params
            const result = await userServices.updateUserFromDB(id, user)
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

const deleteUser = async (req: Request, res: Response) => {
      try {
            const { id } = req.params
            await userServices.deleteUserFromDB(id)
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

export const UserController = {
      createUser,
      getUsers,
      getUser,
      updateUser,
      deleteUser
}
