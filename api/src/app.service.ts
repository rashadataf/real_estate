import { Injectable } from '@nestjs/common';
import { User } from 'common/types';

@Injectable()
export class AppService {
  private rashad: User = {
    email: 'rashadattaf@gmail.com',
    name: 'Rashad Ataf',
  };

  getHello(): string {
    return `Hello World!\nUser Name: ${this.rashad.name}\nUser Email: ${this.rashad.email}`;
  }
}
