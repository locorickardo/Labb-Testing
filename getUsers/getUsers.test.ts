import getUsers from './getUsers';

describe('getUsers', () => {
  test('returns an array of users with names and groups in a Promise', () => {
    return getUsers().then((users) => {
      expect(users).toHaveLength(4);
      expect(users).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'Erik', group: 1 }),
          expect.objectContaining({ name: 'Lisa', group: 2 }),
          expect.objectContaining({ name: 'Hampus', group: 2 }),
          expect.objectContaining({ name: 'Linda', group: 3 }),
        ])
      );
    });
  });
});
