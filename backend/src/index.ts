import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes";
import solanaRoutes from "./routes/solanaRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", aiRoutes);
app.use("/api", solanaRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));