import { star1, star2 } from '@src/day1/day';
import {
    Instruction,
    calculateNextDirection,
    calculatePositions
} from '@src/day1/paths';
describe('Day 1', () => {
    test('star 1', async () => {
        expect(star1()).toBe(271);
    });

    test.only('star 2', async () => {
        expect(star2()).toBe(153);
    });

    test('calculate positions from origin to instruction', async () => {
        expect(
            calculatePositions([0, 0], 'N', ['R', 2] as Instruction).positions
        ).toEqual([
            [1, 0],
            [2, 0]
        ]);

        expect(
            calculatePositions([5, 5], 'N', ['R', 4] as Instruction).positions
        ).toEqual([
            [6, 5],
            [7, 5],
            [8, 5],
            [9, 5]
        ]);

        expect(
            calculatePositions([0, 0], 'N', ['L', 2] as Instruction).positions
        ).toEqual([
            [-1, 0],
            [-2, 0]
        ]);

        expect(
            calculatePositions([5, 5], 'N', ['L', 2] as Instruction).positions
        ).toEqual([
            [4, 5],
            [3, 5]
        ]);
    });

    test('Calculate next direction', () => {
        expect(calculateNextDirection('N', ['R', 2] as Instruction)).toEqual([
            'E',
            2
        ]);

        expect(calculateNextDirection('N', ['L', 2] as Instruction)).toEqual([
            'W',
            2
        ]);

        expect(calculateNextDirection('S', ['R', 2] as Instruction)).toEqual([
            'W',
            2
        ]);

        expect(calculateNextDirection('S', ['L', 2] as Instruction)).toEqual([
            'E',
            2
        ]);

        expect(calculateNextDirection('E', ['R', 2] as Instruction)).toEqual([
            'S',
            2
        ]);

        expect(calculateNextDirection('E', ['L', 2] as Instruction)).toEqual([
            'N',
            2
        ]);

        expect(calculateNextDirection('W', ['R', 2] as Instruction)).toEqual([
            'N',
            2
        ]);

        expect(calculateNextDirection('W', ['L', 2] as Instruction)).toEqual([
            'S',
            2
        ]);
    });
});
