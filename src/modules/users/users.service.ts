import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from './user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(
  name: string,
  email: string,
  password: string,
  role: UserRole = UserRole.USER,
) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = this.userRepo.create({
    name,
    email,
    passwordHash,
    role,
  });

  return this.userRepo.save(user);
}

findByEmail(email: string) {
  return this.userRepo.findOne({
    where: { email },
  });
}



  findAll() {
    return this.userRepo.find();
  }
}
