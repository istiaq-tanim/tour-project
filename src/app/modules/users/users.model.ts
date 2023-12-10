import { Query, Schema, model } from "mongoose";
import { TUser } from "./users.interface";

const userSchema = new Schema<TUser>({
      name: {
            type: String,
            required: [true, "Name Should be String"]
      },
      age: {
            type: Number
      },
      email: {
            type: String,
            unique: true,
            lowercase: true,
            required: [true, "Please Give Your Email"]
      },
      photo: {
            type: String
      },
      role: {
            type: String,
            enum: {
                  values: ["user", "admin"],
                  message: '{VALUE} is not Valid'
            },
            default: "user"
      },
      useStatus: {
            type: String,
            enum: {
                  values: ["active", "inactive"],
                  message: "{Value} is not Valid"
            },
            default: "active"
      }

});
userSchema.pre(/^find/, function (this: Query<TUser, Document>, next) {
      this.find({ useStatus: { $eq: "active" } })
      next()
})
export const User = model<TUser>('User', userSchema);