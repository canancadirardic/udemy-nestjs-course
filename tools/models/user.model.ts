import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";
import * as mongose from  "mongoose";

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
    birtdate:Date;
}

export const UserSchema = new mongose.Schema({
    name:String,
    surname:String,
    email:String,
    birthDay:Date,
    audit:Object,
    roles:Array,
    groups:Array
  },{ versionKey : false});