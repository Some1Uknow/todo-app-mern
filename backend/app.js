import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./db/mongodb.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connectDB();

app.use("/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
