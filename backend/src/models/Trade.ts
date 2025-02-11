import mongoose, { Schema, Document } from "mongoose";

interface ITrade extends Document {
  user: string;
  aiName: string;
  params: object;
  result: string;
  createdAt: Date;
}

const tradeSchema: Schema = new Schema({
  user: { type: String, required: true },
  aiName: { type: String, required: true },
  params: { type: Object, required: true },
  result: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ITrade>("Trade", tradeSchema);
