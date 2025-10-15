import { Schema, model, models, type InferSchemaType } from "mongoose";

const socialLinksSchema = new Schema(
  {
    instagram: String,
    tiktok: String,
    website: String,
  },
  { _id: false },
);

const geoSchema = new Schema(
  {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  { _id: false },
);

const vendorSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    businessName: { type: String, required: true },
    yearsInBusiness: { type: Number, default: 0 },
    description: { type: String, default: "" },
    tags: [{ type: String }],
    socialLinks: { type: socialLinksSchema, default: {} },
    address: { type: String, required: true },
    geo: { type: geoSchema, required: true },
    heroImage: { type: String },
    gallery: [{ type: String }],
    status: {
      type: String,
      enum: ["pending", "approved", "suspended"],
      default: "pending",
      index: true,
    },
    subscriptionStatus: {
      type: String,
      enum: ["trial", "active", "past_due", "canceled"],
      default: "trial",
    },
    trialEndDate: { type: Date },
    adSpendMonthly: { type: Number },
  },
  {
    timestamps: true,
  },
);

export type VendorDocument = InferSchemaType<typeof vendorSchema>;

export const VendorModel = models.Vendor ?? model("Vendor", vendorSchema);
