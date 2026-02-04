import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email, password, role } = createUserDto;
    return this.usersService.create(name, email, password, role);
  }

@UseGuards(AuthGuard('jwt'))
@Get()
getUsers() {
  return this.usersService.findAll();
}

}
