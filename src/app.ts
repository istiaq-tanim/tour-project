import express, { Application, Request, Response } from "express"
import cors from "cors"
import { userRoutes } from "./app/modules/users/user.routes"
import { tourRoutes } from "./app/modules/tour/tour.routes"
const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/tours', tourRoutes)

app.get('/', (req: Request, res: Response) => {
      res.status(200).json({
            status: "success",
            message: "Tour and Travels are awesome"
      })
})

export default app