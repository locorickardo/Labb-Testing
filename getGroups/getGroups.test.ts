import getGroups from './getGroups';

describe('getGroups', () => {
    test('Returns an array of groups with IDs and group names in a promise', () => {
        return getGroups().then((groups) => {
            expect(groups).toHaveLength(3);
            expect(groups).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ id: 1, groupName: 'Hajarna' }),
                    expect.objectContaining({ id: 2, groupName: 'Valarna' }),
                    expect.objectContaining({ id: 3, groupName: 'Zebrorna' }),
                ])
            );
        });
    });
});
