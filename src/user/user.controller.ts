import { Controller, Post,Body, Get } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){
    }

    @Post()
    CreateUser(@Body() body:UserCreateDto){
        return this.userService.createUser(body);
    }

    @Get()
    GetAllUsers(): UserModel[]{
        return this.userService.getAllUsers();
    }
}
