import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";

export class UserModel {   
    id:string;
    name:string;
    surname:string;
    password:string;
    image:string;
    email:String;
    paswordHash:string;
    audit:AuditModel;
    roles:RoleModel[];
    groups:GroupModel[];
}