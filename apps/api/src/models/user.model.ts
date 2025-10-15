import { Schema, model, models, type InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["buyer", "vendor", "admin"],
      required: true,
      index: true,
    },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    avatarUrl: { type: String },
    favourites: [{ type: Schema.Types.ObjectId, ref: "Listing" }],
    gdprDeletedAt: { type: Date },
  },
  {
    timestamps: true,
  },
);

export type UserDocument = InferSchemaType<typeof userSchema>;

export const UserModel = models.User ?? model("User", userSchema);
