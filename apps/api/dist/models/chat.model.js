import { Schema, model, models } from "mongoose";
const messageSchema = new Schema({
    senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["text", "image", "file"], default: "text" },
    contentUrlOrText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    seenBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, { _id: true });
const chatSchema = new Schema({
    buyerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    vendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
    listingId: { type: Schema.Types.ObjectId, ref: "Listing" },
    messages: { type: [messageSchema], default: [] },
    lastMessageAt: { type: Date, default: Date.now, index: true },
}, {
    timestamps: true,
});
chatSchema.index({ buyerId: 1, vendorId: 1, lastMessageAt: -1 });
export const ChatModel = models.Chat ?? model("Chat", chatSchema);
