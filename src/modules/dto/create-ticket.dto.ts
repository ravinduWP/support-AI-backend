import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TicketPriority } from '../tickets/ticket-priority.enum';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(TicketPriority)
  priority: TicketPriority;
}
