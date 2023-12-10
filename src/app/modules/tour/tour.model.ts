import { Schema, model } from "mongoose";
import { TTour } from "./tour.interface";
import slugify from "slugify";


const tourSchema = new Schema<TTour>({
      name: {
            type: String,
            required: [true, "Name Should be String"],
            unique: true
      },
      durationHours: {
            type: Number,
            required: [true, 'Please tell us your durationHours'],
      },
      ratingAverage: {
            type: Number,
            default: 4.5,
      },
      ratingQuantity: {
            type: Number,
            default: 0,
      },
      createdAt: {
            type: Date,
            default: Date.now(),
      },
      imageCover: {
            type: String,
            required: [true, 'Please tell us your imageCover'],
      },
      images: [String],
      locations: [String],
      price: {
            type: Number,
            required: [true, 'Please tell us your price'],
      },
      slug: String,
      startDates: [Date],
      startLocation: {
            type: String,
            required: [true, 'Please tell us your startLocation'],
      }
}, {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
});

tourSchema.virtual("durationDay").get(function () {
      return Math.ceil(this.durationHours / 24) as number
})

tourSchema.pre("save", function (next) {

      this.slug = slugify(this.name, { lower: true })
      next()
})

export const Tour = model<TTour>('Tour', tourSchema);