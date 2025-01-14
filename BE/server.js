import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudnary from "./config/cloudinary.js";
import addminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// App Config //
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudnary();
// Middlewares //
app.use(express.json());
app.use(cors());

// API EndPoints //

app.use("/api/admin", addminRouter);
// localhost:4000/api/admin/add-doctor

app.use("/api/doctor", doctorRouter);

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working Well");
});

// Run The Server //

app.listen(port, () => {
  console.log("Server is Runnig", port);
});
