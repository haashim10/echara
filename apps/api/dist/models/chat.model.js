"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModel = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    senderId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["text", "image", "file"], default: "text" },
    contentUrlOrText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    seenBy: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
}, { _id: true });
const chatSchema = new mongoose_1.Schema({
    buyerId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    vendorId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Vendor", required: true },
    listingId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Listing" },
    messages: { type: [messageSchema], default: [] },
    lastMessageAt: { type: Date, default: Date.now, index: true },
}, {
    timestamps: true,
});
chatSchema.index({ buyerId: 1, vendorId: 1, lastMessageAt: -1 });
exports.ChatModel = mongoose_1.models.Chat ?? (0, mongoose_1.model)("Chat", chatSchema);
