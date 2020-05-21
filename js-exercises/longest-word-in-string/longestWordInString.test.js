import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {

    it('should return a string', () => {
        expect(typeof longestWordInString('should return a string')).toBe('string');
    });

    it('should return the longest word in a string', () => {
        expect(longestWordInString('should return the longest word in a string')).toBe('longest');
    })

    it('should return an empty string if empty string passed', () => {
        expect(longestWordInString('')).toBe('');
    })
});
