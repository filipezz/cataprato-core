import { Controller, Get } from '@nestjs/common';

@Controller('helth-check')
export class AppController {
  @Get()
  healthCheck() {
    return 200;
  }
}
