import express from "express"
import dotenv from "dotenv"
import path from "path"
import AuthRouter from "../routes/auth-routes"
import { errorMiddleware } from "../middleware/error.middleware"
import ReminderRouter from "../routes/reminder-routes"
dotenv.config()

let app = express()

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
    res.render("pages/home");
});

app.use(errorMiddleware)

app.use('/auth',AuthRouter)
app.use('/reminders',ReminderRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://localhost:${process.env.PORT||null}`)
})