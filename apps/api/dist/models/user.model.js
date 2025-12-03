"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    role: {
        type: String,
        enum: ["buyer", "vendor", "admin"],
        required: true,
        index: true,
    },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    avatarUrl: { type: String },
    favourites: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Listing" }],
    gdprDeletedAt: { type: Date },
}, {
    timestamps: true,
});
exports.UserModel = mongoose_1.models.User ?? (0, mongoose_1.model)("User", userSchema);
