"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = void 0;
const mongoose_1 = require("mongoose");
const ratingsSchema = new mongoose_1.Schema({
    quality: { type: Number, required: true, min: 1, max: 5 },
    communication: { type: Number, required: true, min: 1, max: 5 },
    value: { type: Number, required: true, min: 1, max: 5 },
    professionalism: { type: Number, required: true, min: 1, max: 5 },
}, { _id: false });
const reviewSchema = new mongoose_1.Schema({
    bookingId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Booking", required: true },
    buyerId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    vendorId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Vendor", required: true },
    listingId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Listing", required: true },
    ratings: { type: ratingsSchema, required: true },
    overall: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    vendorReply: { type: String },
    repliedAt: { type: Date },
    hiddenByAdmin: { type: Boolean, default: false },
}, {
    timestamps: true,
});
reviewSchema.index({ vendorId: 1, createdAt: -1 });
exports.ReviewModel = mongoose_1.models.Review ?? (0, mongoose_1.model)("Review", reviewSchema);
