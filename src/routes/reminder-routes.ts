import { Router } from "express";
import ReminderController from "../controllers/reminder-controller";

const ReminderRouter = Router()

const reminderController = new ReminderController()

ReminderRouter.get("/view",(req,res)=>reminderController.getReminder(req,res))

export default ReminderRouter