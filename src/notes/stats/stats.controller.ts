import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller()
export class StatsController {
  constructor(private readonly notesService: StatsService) {};


  @Get()
  getStats() {
    return this.notesService.getStats();
  };
}
