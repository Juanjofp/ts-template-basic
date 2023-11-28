export type Position = [number, number];

const Directions = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0]
} as const;

export type Direction = keyof typeof Directions;

export type Instruction = ['L' | 'R', number];

export function calculatePath(
    input: Instruction[],
    initialPosition: Position = [0, 0],
    initialDirection: Direction = 'N'
) {
    return input.reduce(
        (acc, nextInstruction) => {
            const prevPosition = acc.positions[acc.positions.length - 1];

            const prevDirection = acc.lastDirection;

            const { positions, direction } = calculatePositions(
                prevPosition,
                prevDirection,
                nextInstruction
            );

            return {
                positions: [...acc.positions, ...positions],
                lastDirection: direction
            };
        },
        {
            positions: [initialPosition],
            lastDirection: initialDirection
        }
    );
}

export function calculatePositions(
    initialPosition: Position,
    currentDirection: Direction,
    instruction: Instruction
): { positions: Position[]; direction: Direction } {
    const [nextDirection, distance] = calculateNextDirection(
        currentDirection,
        instruction
    );

    const increment = Directions[nextDirection];

    return {
        positions: Array.from({ length: distance }).map((value, index) => [
            initialPosition[0] + increment[0] * (index + 1),
            initialPosition[1] + increment[1] * (index + 1)
        ]),
        direction: nextDirection
    };
}

export function calculateNextDirection(
    currentDirection: Direction,
    instruction: Instruction
) {
    const [direction, distance] = instruction;

    const directions = Object.keys(Directions) as Direction[];

    const currentIndex = 4 + directions.indexOf(currentDirection);

    const nextIndex = direction === 'R' ? currentIndex + 1 : currentIndex - 1;

    const index = nextIndex % directions.length;

    const nextDirection = directions[index];

    return [nextDirection, distance] as const;
}
