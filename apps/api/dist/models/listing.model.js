"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingModel = void 0;
const mongoose_1 = require("mongoose");
const priceRangeSchema = new mongoose_1.Schema({
    min: { type: Number, required: true, min: 0 },
    max: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "GBP" },
}, { _id: false });
const locationSchema = new mongoose_1.Schema({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true },
}, { _id: false });
const availabilitySchema = new mongoose_1.Schema({
    startISO: { type: Date, required: true },
    endISO: { type: Date, required: true },
    source: { type: String, enum: ["manual", "google"], default: "manual" },
}, { _id: false });
const policiesSchema = new mongoose_1.Schema({
    depositPercent: Number,
    cancellationWindowDays: Number,
    refundRules: String,
}, { _id: false });
const criteriaAvgSchema = new mongoose_1.Schema({
    quality: { type: Number, default: 0 },
    communication: { type: Number, default: 0 },
    value: { type: Number, default: 0 },
    professionalism: { type: Number, default: 0 },
}, { _id: false });
const ratingSummarySchema = new mongoose_1.Schema({
    avgOverall: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
    criteriaAvg: { type: criteriaAvgSchema, default: () => ({}) },
}, { _id: false });
const listingSchema = new mongoose_1.Schema({
    vendorId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Vendor", required: true, index: true },
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
exports.ListingModel = mongoose_1.models.Listing ?? (0, mongoose_1.model)("Listing", listingSchema);
