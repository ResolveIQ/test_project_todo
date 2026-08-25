import { Request,Response } from "express"

class ReminderController {

    getReminder(req:Request,res:Response){

        return res.render('pages/home')
    
    }
}

export default ReminderController