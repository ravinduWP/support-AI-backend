import { Column, Entity, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../common/entities/base.entity';
import { Ticket } from '../tickets/ticket.entity';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  AGENT = 'agent',
}

@Entity('users')
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  passwordHash: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @OneToMany(() => Ticket, (ticket) => ticket.user)
  tickets: Ticket[];
}
