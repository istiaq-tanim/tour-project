import { Schema } from "mongoose"

export type TReview = {
      review: string,
      ratings: number,
      createdAt: Date,
      tours: Schema.Types.ObjectId,
      users: Schema.Types.ObjectId
}