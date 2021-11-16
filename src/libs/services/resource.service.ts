
import { AuditModel } from 'tools/models/audit.model';
import { FilterQuery, Model } from 'mongoose';

export class ResourceService<T extends any, C extends any, U extends any>{
    constructor(protected readonly mongoModel: Model<T>) {}

    async create(model : C): Promise<T>{
        const audit = new AuditModel();
        
        audit.active = true;
        audit.createdBy = "Admin";
        audit.createdDate = new Date();
        
        const createdModel = new this.mongoModel( Object.assign(model,audit));
    
        return await createdModel.save();
      }
    
      async findAll() : Promise<T[]> {
        return await this.mongoModel.find().exec();
      }
    
      async findOne( id: string ) : Promise<T> {
        return await this.mongoModel.findById({ _id:id}).exec();
      }
     
      async delete( id: string ) : Promise<T> {
        return await this.mongoModel.findByIdAndRemove({ _id:id}).exec();
      }
    
      async update( id: string, dto: U ) : Promise<T> {
        let newModel =  this.mongoModel.findById({_id : id}).exec();
        newModel = Object.assign(newModel,dto);
    
        return await this.mongoModel.findByIdAndUpdate( id, newModel  as FilterQuery<T>, { new:true })
        .exec();
      }
}