import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
    it('should return a function', () => {
        expect(typeof flipArgs()).toBe('function');
    });

    it('Return the arguments in reversed ordered array', () => {
        const foo = function () {
            return [...arguments];
        };
        const reversedResult = flipArgs(foo);
        const expectedReversedResult = [3, 2, 1]
        expect(reversedResult(1, 2, 3)).toEqual(expectedReversedResult);
    });
});