import { sumPrimes } from './sumPrimes';

describe('sumPrimes', () => {

    test('should throw an error if parameter is not a number', () => {
        expect(() => {
            sumPrimes('hi');
        }).toThrow();
    })

    test('should return a number', () => {
        expect(typeof sumPrimes(10)).toEqual('number');
    });
    test('should return the correct output', () => {
        expect(sumPrimes(10)).toBe(17);
        expect(sumPrimes(977)).toBe(73156);
    });
});
