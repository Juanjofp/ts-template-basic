import { parsedInput } from './input';
import { Position, calculatePath } from './paths';

export function star1() {
    const input = parsedInput();

    const positions = calculatePath(input);

    const lastPosition = positions.positions[positions.positions.length - 1];

    return Math.abs(lastPosition[0]) + Math.abs(lastPosition[1]);
}

export function star2() {
    const input = parsedInput();

    const positions = calculatePath(input);

    const cachedPositions = new Set<string>();

    const repeatedPositions = positions.positions.reduce((acc, next) => {
        const key = `${next[0]},${next[1]}`;

        if (cachedPositions.has(key)) {
            return [...acc, next];
        } else {
            cachedPositions.add(key);
        }

        return acc;
    }, [] as Position[]);

    return (
        Math.abs(repeatedPositions[0][0]) + Math.abs(repeatedPositions[0][1])
    );
}
