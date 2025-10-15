import { Schema, model, models, type InferSchemaType } from "mongoose";

const ratingsSchema = new Schema(
  {
    quality: { type: Number, required: true, min: 1, max: 5 },
    communication: { type: Number, required: true, min: 1, max: 5 },
    value: { type: Number, required: true, min: 1, max: 5 },
    professionalism: { type: Number, required: true, min: 1, max: 5 },
  },
  { _id: false },
);

const reviewSchema = new Schema(
  {
    bookingId: { type: Schema.Types.ObjectId, ref: "Booking", required: true },
    buyerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    vendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
    listingId: { type: Schema.Types.ObjectId, ref: "Listing", required: true },
    ratings: { type: ratingsSchema, required: true },
    overall: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    vendorReply: { type: String },
    repliedAt: { type: Date },
    hiddenByAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

reviewSchema.index({ vendorId: 1, createdAt: -1 });

export type ReviewDocument = InferSchemaType<typeof reviewSchema>;

export const ReviewModel =
  models.Review ?? model("Review", reviewSchema);
