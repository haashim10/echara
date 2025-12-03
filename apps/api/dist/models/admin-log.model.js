"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLogModel = void 0;
const mongoose_1 = require("mongoose");
const adminLogSchema = new mongoose_1.Schema({
    performedByAdminId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    action: { type: String, required: true },
    targetType: { type: String, required: true },
    targetId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    metadata: { type: mongoose_1.Schema.Types.Mixed },
}, {
    timestamps: { createdAt: true, updatedAt: false },
});
adminLogSchema.index({ createdAt: -1 });
adminLogSchema.index({ action: 1, targetType: 1 });
exports.AdminLogModel = mongoose_1.models.AdminLog ?? (0, mongoose_1.model)("AdminLog", adminLogSchema);
