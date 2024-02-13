import { Database } from './db';

describe('Database', () => {
  let database: Database;

  beforeEach(() => {
    database = Database.getInstance();
    database.clearCollection('users');
  });

  it('should add a value to the collection', () => {
    const user = { id: '1', name: 'Ivan' };
    database.addValue('users', user);

    const collection = database.getCollection('users')!;
    expect(collection).toHaveLength(1);
    expect(collection[0]).toEqual(user);
  });

  it('should get a value from the collection', () => {
    const user = { id: '1', name: 'Ivan' };
    database.addValue('users', user);

    const result = database.getValue('users', '1');
    expect(result).toEqual(user);
  });

  it('should remove a value from the collection', () => {
    const user = { id: '1', name: 'Ivan' };
    database.addValue('users', user);

    const removedUser = database.removeValue('users', '1');
    expect(removedUser).toEqual(user);

    const collection = database.getCollection('users');
    expect(collection).toHaveLength(0);
  });

  it('should update a value in the collection', () => {
    const user = { id: '1', name: 'Ivan' };
    database.addValue('users', user);

    database.updateValue('users', '1', user);

    const collection = database.getCollection('users')!;
    expect(collection).toHaveLength(1);
    expect(collection[0]).toEqual(user);
  });

  it('should clear a collection', () => {
    const user = { id: '1', name: 'Ivan' };
    database.addValue('users', user);

    database.clearCollection('users');

    const collection = database.getCollection('users');
    expect(collection).toHaveLength(0);
  });
});
