import { Request,Response } from "express";
import { IService } from "../interfaces/IService";

class AuthController {

    constructor( 
        private service:IService
    ){}

    getLogin(req:Request,res:Response){
        
        return res.render('auth/login')
    }

    async loginWithGoogle(req:Request,res:Response){
        try{

            const userUnderProgress = await this.service.googleLogin()

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