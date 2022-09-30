import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Task 3</h1><h2>NestJS inside!</h2>';
  }
}
