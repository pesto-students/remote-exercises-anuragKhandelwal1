import { map, filter, invert, merge, all, some } from "./objectUtils";

describe("objectUtils", () => {
    it("map takes an object and transforms the (key, value) pair according to the callback function.", () => {
        const obj = { tom: 20, peter: 30 };
        const callback = ([key, val]) => [key.toUpperCase(), val * 10];
        const result = { TOM: 200, PETER: 300 };
        expect(map(obj, callback)).toEqual(result);
    });
    it("Filters on the basis of keys or values.", () => {
        const obj = { name: 'anurag', age: 24 };
        const callback = ([key, val]) => key === "name";
        const result = { name: 'anurag' };
        expect(filter(obj, callback)).toEqual(result);
    });
    it("Inverts key value pairs.", () => {
        const obj = { name: 'anurag', hobby: 'sleeping' };

        const result = { anurag: 'name', sleeping: 'hobby' };
        expect(invert(obj)).toEqual(result);
    });
    it("Merge n number of objects into a single object.", () => {
        const obj1 = { name: 'anurag' };
        const obj2 = { age: 24 };
        const obj3 = { hobby: 'sleeping' };

        const result = { name: 'anurag', age: 24, hobby: 'sleeping' };
        expect(merge(obj1, obj2, obj3)).toEqual(result);
    });
    it("all elements in the array should pass the test implemented", () => {
        const array1 = [1, 3, 9, 4, 2, 7];
        const callback = (currentValue) => currentValue < 10;
        const result = true;
        expect(all(array1, callback)).toEqual(result);
    });
    it("atleast one elements in the array should pass the test implemented", () => {
        const array1 = [1, 12, 2, 3, 7, 9];
        const callback = (currentValue) => currentValue > 11;
        const result = true;
        expect(some(array1, callback)).toEqual(result);
    });
});