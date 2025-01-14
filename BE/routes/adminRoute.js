import express from "express";
import {
  addDoctor,
  allDoctors,
  loginAdmin,
  appointmentsAdmin,
  appointmentCancel,
  adminDashboard,
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAVL } from "../controllers/doctorController.js";

const addminRouter = express.Router();

addminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
addminRouter.post("/login", loginAdmin);
addminRouter.post("/all-doctors", authAdmin, allDoctors);
addminRouter.post("/change-availability", authAdmin, changeAVL);
addminRouter.get("/appointments", authAdmin, appointmentsAdmin);
addminRouter.post("/cancel-appointment", authAdmin, appointmentCancel);
addminRouter.get("/dashboard", authAdmin, adminDashboard);
export default addminRouter;
