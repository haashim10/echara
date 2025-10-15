import { Schema, model, models, type InferSchemaType } from "mongoose";

const adminLogSchema = new Schema(
  {
    performedByAdminId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: { type: String, required: true },
    targetType: { type: String, required: true },
    targetId: { type: Schema.Types.ObjectId, required: true },
    metadata: { type: Schema.Types.Mixed },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

adminLogSchema.index({ createdAt: -1 });
adminLogSchema.index({ action: 1, targetType: 1 });

export type AdminLogDocument = InferSchemaType<typeof adminLogSchema>;

export const AdminLogModel =
  models.AdminLog ?? model("AdminLog", adminLogSchema);
