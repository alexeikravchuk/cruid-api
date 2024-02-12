import { uuid } from '../utils/uuid';

export default class User {
  id: string;
  constructor(public name: string, public age: number, public hobbies: string[]) {
    this.id = uuid();
  }

  update(data: Partial<User>) {
    this.name = data.name || this.name;
    this.age = data.age || this.age;
    this.hobbies = data.hobbies || this.hobbies;
  }
}
