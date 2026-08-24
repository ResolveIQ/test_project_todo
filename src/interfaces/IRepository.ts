import { DecodedIdToken } from "firebase-admin/auth";

export interface IRepository{

    create(id_token:string):Promise<DecodedIdToken>
    
}