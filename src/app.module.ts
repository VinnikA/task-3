import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { StatsModule } from './notes/stats/stats.module';


@Module({
  imports: [StatsModule, NotesModule, 
    RouterModule.register([
      {
        path: 'notes',
        module: NotesModule,
        children: [
          {
            path: 'stats',
            module: StatsModule,
          }
        ]
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
