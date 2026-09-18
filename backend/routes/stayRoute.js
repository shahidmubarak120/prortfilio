import express from 'express';
import { loginStay, appointmentsStay, appointmentCancel, stayList, changeAvailablity, appointmentComplete, stayDashboard, stayProfile, updateStayProfile } from '../controllers/stayController.js';
import authStay from '../middleware/authStay.js';
const stayRouter = express.Router();

stayRouter.post("/login", loginStay)
stayRouter.post("/cancel-appointment", authStay, appointmentCancel)
stayRouter.get("/appointments", authStay, appointmentsStay)
stayRouter.get("/list", stayList)
stayRouter.post("/change-availability", authStay, changeAvailablity)
stayRouter.post("/complete-appointment", authStay, appointmentComplete)
stayRouter.get("/dashboard", authStay, stayDashboard)
stayRouter.get("/profile", authStay, stayProfile)
stayRouter.post("/update-profile", authStay, updateStayProfile)

export default stayRouter;