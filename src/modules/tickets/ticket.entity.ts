import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../users/user.entity';
import { TicketStatus } from './ticket-status.enum';
import { TicketPriority } from './ticket-priority.enum';

@Entity('tickets')
export class Ticket extends BaseEntity {
  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: TicketStatus,
    default: TicketStatus.OPEN,
  })
  status: TicketStatus;

  @Column({
    type: 'enum',
    enum: TicketPriority,
    default: TicketPriority.MEDIUM,
  })
  priority: TicketPriority;

  @ManyToOne(() => User, (user) => user.tickets, { eager: true })
  user: User;
}
