import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addStay, allStays, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/stayController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-stay", authAdmin, upload.single('image'), addStay)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-stays", authAdmin, allStays)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;