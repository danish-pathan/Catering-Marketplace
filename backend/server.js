import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Assuming connectDB is using export default
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use("/api/products", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
