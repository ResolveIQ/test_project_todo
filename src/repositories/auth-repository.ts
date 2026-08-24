import { IRepository } from "../interfaces/IRepository";
import { adminAuth } from "../firebase/firebase-admin";
import { DecodedIdToken } from "firebase-admin/auth";


class AuthRepository implements IRepository{
    
    async create(id_token:string): Promise<DecodedIdToken> {
        return await adminAuth.verifyIdToken(id_token)
    }

}

export default AuthRepository