import { TTour } from "./tour.interface"
import { Tour } from "./tour.model"
const createTourIntoDB = async (payload: TTour) => {
      const result = await Tour.create(payload)
      return result
}
const getToursFromDB = async () => {
      const result = await Tour.find()
      return result
}
const getTourFromDB = async (id: string) => {
      const result = await Tour.findById(id)
      return result
}
const updateTourInDB = async (id: string, payload: TTour) => {
      const result = await Tour.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true
      })
      return result
}
const deleteTourInDB = async (id: string) => {
      const result = await Tour.findByIdAndDelete(id)
      return result
}
export const tourServices = {
      createTourIntoDB,
      getToursFromDB,
      getTourFromDB,
      updateTourInDB,
      deleteTourInDB
}