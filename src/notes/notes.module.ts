import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { StatsModule } from 'src/notes/stats/stats.module';

@Module({
  imports: [StatsModule], 
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
