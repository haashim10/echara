"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorModel = void 0;
const mongoose_1 = require("mongoose");
const socialLinksSchema = new mongoose_1.Schema({
    instagram: String,
    tiktok: String,
    website: String,
}, { _id: false });
const geoSchema = new mongoose_1.Schema({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
}, { _id: false });
const vendorSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
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
}, {
    timestamps: true,
});
exports.VendorModel = mongoose_1.models.Vendor ?? (0, mongoose_1.model)("Vendor", vendorSchema);
