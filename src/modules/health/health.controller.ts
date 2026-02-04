import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get()
  check() {
    return {
      status: 'OK',
      message: 'NestJS backend is running',
      timestamp: new Date(),
    };
  }
}
