import { Schema, model, models } from "mongoose";
const requestedSlotSchema = new Schema({
    startISO: { type: Date, required: true },
    endISO: { type: Date, required: true },
}, { _id: false });
const paymentLogSchema = new Schema({
    amountGBP: { type: Number, required: true },
    method: { type: String, enum: ["cash", "bank", "other"], required: true },
    dateISO: { type: Date, required: true },
    notes: { type: String },
}, { _id: false });
const bookingSchema = new Schema({
    buyerId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    vendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: true, index: true },
    listingId: { type: Schema.Types.ObjectId, ref: "Listing", required: true },
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
    messagesThreadId: { type: Schema.Types.ObjectId, ref: "Chat" },
}, {
    timestamps: true,
});
bookingSchema.index({ vendorId: 1, status: 1, "requestedSlot.startISO": 1 }, { name: "vendor_status_start_idx" });
export const BookingModel = models.Booking ?? model("Booking", bookingSchema);
