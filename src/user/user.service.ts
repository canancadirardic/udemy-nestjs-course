import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

const result : UserModel[] = [];

@Injectable()
export class UserService {
  getAllUsers() : UserModel[]{
    if(result.length === 0){
      this.createMockUser({
        birtdate : new Date(),
        name : "Canan",
        surname : "Cadirardic",
        password : "123123",
        email : "canancadirardic@gmail.com"
      });      
    }
    return result;
  }

  createUser(body:UserCreateDto){
    const isExist = result.find(x=> {x.email === body.email});
    if(isExist){
        isExist;
    }
    else{
      this.createMockUser(body);
      return result.slice(result.length -1, result.length);
    }
  }

  private createMockUser(data: any){
    const user: UserModel = new UserModel();
    user.birtdate = data.birtdate;
    user.name = data.name;
    user.surname = data.surname;
    user.password = data.password;
    user.email = data.email;

    user.id = (Math.floor(Math.random()* 60) +1).toString();

    result.push(user);
  }
}