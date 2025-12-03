"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModel = void 0;
const mongoose_1 = require("mongoose");
const requestedSlotSchema = new mongoose_1.Schema({
    startISO: { type: Date, required: true },
    endISO: { type: Date, required: true },
}, { _id: false });
const paymentLogSchema = new mongoose_1.Schema({
    amountGBP: { type: Number, required: true },
    method: { type: String, enum: ["cash", "bank", "other"], required: true },
    dateISO: { type: Date, required: true },
    notes: { type: String },
}, { _id: false });
const bookingSchema = new mongoose_1.Schema({
    buyerId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    vendorId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Vendor", required: true, index: true },
    listingId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Listing", required: true },
    status: {
        type: String,
        enum: ["pending", "confirmed", "declined", "completed", "canceled"],
        default: "pending",
        index: true,
    },
    requestedSlot: { type: requestedSlotSchema, required: true },
    approvedAt: Date,
    declinedAt: Date,
    completedAt: Date,
    canceledAt: Date,
    cancelReason: String,
    paymentLogged: paymentLogSchema,
    messagesThreadId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Chat" },
}, {
    timestamps: true,
});
bookingSchema.index({ vendorId: 1, status: 1, "requestedSlot.startISO": 1 }, { name: "vendor_status_start_idx" });
exports.BookingModel = mongoose_1.models.Booking ?? (0, mongoose_1.model)("Booking", bookingSchema);
