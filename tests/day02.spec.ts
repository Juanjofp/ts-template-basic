import { star1, star2 } from '@src/day02/day';

describe('Day 02', () => {
    test('star 1', async () => {
        expect(star1()).toBe(271);
    });

    test('star 2', async () => {
        expect(star2()).toBe(153);
    });
});
