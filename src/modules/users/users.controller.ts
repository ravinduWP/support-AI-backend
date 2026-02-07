import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from './user.entity';
import { Roles } from '../auth/decorators/decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Authenticated (any role)
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email, password, role } = createUserDto;
    return this.usersService.create(name, email, password, role);
  }

  // Authenticated (any role)
  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  // Authenticated (any role)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  // Admin only
  @Roles(UserRole.ADMIN)
  @Get('admin')
  getAdminData() {
    return { message: 'Admin access granted' };
  }

  //  Admin + Agent
  @Roles(UserRole.ADMIN, UserRole.AGENT)
  @Get('staff')
  getStaffData() {
    return { message: 'Staff access granted' };
  }
}
