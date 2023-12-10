import { TUser } from "./users.interface"
import { User } from "./users.model"

const createUserIntoDB = async (payload: TUser) => {
      const result = await User.create(payload)
      return result
}

const getUsersFromDB = async () => {
      const result = await User.find()
      return result
}
const getUserFromDB = async (id: string) => {
      const result = await User.findById(id)
      return result
}
const updateUserFromDB = async (id: string, payload: TUser) => {
      const result = await User.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true
      })
      return result
}

const deleteUserFromDB = async (id: string) => {
      const result = await User.findByIdAndDelete(id)
      return result
}
export const userServices = {
      createUserIntoDB,
      getUsersFromDB,
      getUserFromDB,
      updateUserFromDB,
      deleteUserFromDB
}