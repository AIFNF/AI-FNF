import mongoose, { Schema, Document } from "mongoose";

/**
 * Trade Interface - Defines the structure of a trade document.
 */
interface ITrade extends Document {
  user: string;
  aiName: string;
  params: Record<string, any>;
  result: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Trade Schema - Defines the database structure for storing AI trade results.
 */
const tradeSchema: Schema<ITrade> = new Schema(
  {
    user: { type: String, required: true, trim: true, index: true },
    aiName: { type: String, required: true, trim: true },
    params: { type: Object, required: true },
    result: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt fields
  }
);

// Index createdAt for better query performance
tradeSchema.index({ createdAt: -1 });

export default mongoose.model<ITrade>("Trade", tradeSchema);
