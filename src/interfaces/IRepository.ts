import { UserCredential } from "firebase/auth";

export interface IRepository{

    create():Promise<UserCredential>
    
}