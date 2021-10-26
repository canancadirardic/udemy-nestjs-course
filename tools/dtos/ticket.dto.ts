import { ActivityModel } from "tools/models/activity.model";
import { AuditModel } from "tools/models/audit.model";
import { InventoryModel } from "tools/models/inventory.model";
import { UserModel } from "tools/models/user.model";
import { TicketTypeDto } from "./ticket-type.dto";

export class TicketCreateDto{
    name:string;
    description:string;
    type:TicketTypeDto;
    responsible:UserModel;
    audit:AuditModel;
    activities:ActivityModel[];
    inventories:InventoryModel[];

}