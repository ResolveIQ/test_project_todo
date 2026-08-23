import { UserCredential } from "firebase/auth";
import { IRepository } from "../interfaces/IRepository";
import { IService } from "../interfaces/IService";


class AuthService implements IService{

    constructor(
        private Repository:IRepository
    ){}

    async googleLogin(): Promise<UserCredential> {
        return await this.Repository.create()
    }
    
}   

export default AuthService