import express from "express";
import {
  doctorList,
  loginDoctor,
  appointmentsDoc,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
  docProf,
  updateProfile,
} from "../controllers/doctorController.js";
import authDoc from "../middlewares/authDoc.js";

const doctorRouter = express.Router();

// Endpoint to get all doctor list //

doctorRouter.get("/list", doctorList);

// Doctor Login EndPoint //

doctorRouter.post("/login", loginDoctor);

// All the Bookings to the Doctor Pannel //

doctorRouter.get("/appointments", authDoc, appointmentsDoc);

// Cancel or complete the appoitnemnt for the Docs

doctorRouter.post("/complete-appointment", authDoc, appointmentComplete);

doctorRouter.post("/cancel-appointment", authDoc, appointmentCancel);

// API for Doctor Dashboard //
doctorRouter.get("/dashboard", authDoc, doctorDashboard);

// API for Updating Profile Info//
doctorRouter.get("/profile", authDoc, docProf);
doctorRouter.post("/update-profile", authDoc, updateProfile);

export default doctorRouter;
