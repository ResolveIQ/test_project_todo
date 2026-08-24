import { IRepository } from "../interfaces/IRepository";
import { IService } from "../interfaces/IService";
import { DecodedIdToken } from "firebase-admin/auth";


class AuthService implements IService{

    constructor(
        private Repository:IRepository
    ){}

    async googleLogin(id_token:string): Promise<DecodedIdToken> {
        return await this.Repository.create(id_token)
    }
    
}   

export default AuthService