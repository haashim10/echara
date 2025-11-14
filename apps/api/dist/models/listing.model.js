import { Schema, model, models } from "mongoose";
const priceRangeSchema = new Schema({
    min: { type: Number, required: true, min: 0 },
    max: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "GBP" },
}, { _id: false });
const locationSchema = new Schema({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true },
}, { _id: false });
const availabilitySchema = new Schema({
    startISO: { type: Date, required: true },
    endISO: { type: Date, required: true },
    source: { type: String, enum: ["manual", "google"], default: "manual" },
}, { _id: false });
const policiesSchema = new Schema({
    depositPercent: Number,
    cancellationWindowDays: Number,
    refundRules: String,
}, { _id: false });
const criteriaAvgSchema = new Schema({
    quality: { type: Number, default: 0 },
    communication: { type: Number, default: 0 },
    value: { type: Number, default: 0 },
    professionalism: { type: Number, default: 0 },
}, { _id: false });
const ratingSummarySchema = new Schema({
    avgOverall: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
    criteriaAvg: { type: criteriaAvgSchema, default: () => ({}) },
}, { _id: false });
const listingSchema = new Schema({
    vendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: true, index: true },
    category: { type: String, required: true },
    priceRange: { type: priceRangeSchema, required: true },
    description: { type: String, default: "" },
    gallery: [{ type: String }],
    tags: [{ type: String }],
    location: { type: locationSchema, required: true },
    availability: [availabilitySchema],
    policies: { type: policiesSchema, default: () => ({}) },
    ratingSummary: { type: ratingSummarySchema, default: () => ({}) },
    isFeatured: { type: Boolean, default: false },
    isVisible: { type: Boolean, default: true },
}, {
    timestamps: true,
});
listingSchema.index({ category: 1, "location.lat": 1, "location.lng": 1 });
listingSchema.index({ description: "text", tags: "text" }, { weights: { description: 2, tags: 1 } });
export const ListingModel = models.Listing ?? model("Listing", listingSchema);
