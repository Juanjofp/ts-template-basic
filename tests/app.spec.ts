import { deleteMe } from '@src/deleteme';
describe('App', () => {
    test('should pass always...', async () => {
        expect(deleteMe()).toBe(true);
    });
});
