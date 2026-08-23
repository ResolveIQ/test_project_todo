import { Router } from "express";
import AuthRepository from "../repositories/auth-repository";
import AuthService from "../services/auth-service";
import AuthController from "../controllers/auth-controller";

const AuthRouter = Router()

const authRepo = new AuthRepository()
const authService = new AuthService(authRepo)
const authController = new AuthController(authService)

AuthRouter.get("/",(req,res)=>authController.getLogin(req,res))

export default AuthRouter