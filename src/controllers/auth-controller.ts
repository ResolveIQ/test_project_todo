import { Request,Response } from "express";
import { IService } from "../interfaces/IService";
import dotenv from "dotenv"
dotenv.config()

class AuthController {

    constructor( 
        private service:IService
    ){}

    getLogin(req:Request,res:Response){
        
        return res.render('auth/login',{
            firebaseConfig:{
                apiKey: process.env.API_KEY,
                appId: process.env.APP_ID
            }
        })
    }

    async loginWithGoogle(req:Request,res:Response){
        try{

            const { id_token } = req.body

            if (!id_token) {
                return res.status(400).json({
                    success: false,
                    message: "Google ID token is required"
                });
            }
            
            const userUnderProgress = await this.service.googleLogin(id_token)

            if(!userUnderProgress){
                return res.status(401).json({
                    success:false,
                    message:"Google login failed"
                })
            }
            
            return res.status(200).json({
                success:true,
                message:"Google login successfull"
            })

        }catch(error){
            return res.status(500).json({
                success:false,
                message:"Server is down try again later"
            })
        }
    }
}

export default AuthController