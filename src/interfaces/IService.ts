import { DecodedIdToken } from "firebase-admin/auth";


export interface IService{

    googleLogin(id_token:string):Promise<DecodedIdToken>

}