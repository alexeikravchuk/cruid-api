import { uuid } from '../utils/uuid';

export class User {
  id: string;
  constructor(public name: string, public age: number, public hobbies: string[]) {
    this.id = uuid();
  }
}
