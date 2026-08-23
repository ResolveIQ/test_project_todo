import { UserCredential } from "firebase/auth";


export interface IService{

    googleLogin():Promise<UserCredential>

}