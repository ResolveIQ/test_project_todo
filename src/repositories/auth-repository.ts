import { signInWithPopup, UserCredential } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import { IRepository } from "../interfaces/IRepository";


class AuthRepository implements IRepository{
    
    async create(): Promise<UserCredential> {
        return signInWithPopup(auth,googleProvider)
    }

}

export default AuthRepository