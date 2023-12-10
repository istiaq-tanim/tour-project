import { Schema, model } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema = new Schema<TReview>({
      review: {
            type: String,
            required: [true, 'Please tell us your review'],
      }, createdAt: {
            type: Date,
            default: Date.now()
      },
      ratings: {
            type: Number,
            required: [true, 'Please tell us your rating'],
      },
      tours: {
            type: Schema.Types.ObjectId,
            ref: "Tour",
            required: [true, 'Please tell us your tour'],
      },
      users: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, 'Please tell us your user']
      }
});

export const Tour = model<TReview>('Tour', reviewSchema);