import { IUser } from '../types';
import { uuid } from '../utils/uuid';

export default class User implements IUser {
  id: string;
  constructor(public username: string, public age: number, public hobbies: string[]) {
    this.id = uuid();
  }

  update(data: Partial<User>) {
    this.username = data.username || this.username;
    this.age = data.age || this.age;
    this.hobbies = data.hobbies || this.hobbies;
  }
}
