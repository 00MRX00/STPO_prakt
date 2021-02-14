import { Prakt } from './appController';

let appContr = new Prakt();

describe('App test', () => {
    test('IsSimp function', () => {
        expect(appContr.isSimp(12)).toStrictEqual(false);
    });
    test('FirstDigitCheck function', () => {
        expect(appContr.firstDigitCheck(12, appContr.Character.MORE)).toStrictEqual(false);
    });
    test('CalculateResult function', () => {
        expect(appContr.calculateResult([1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234], appContr.Character.MORE)).toStrictEqual([]);
    });
    test('ParseNumbers function', () => {
        expect(appContr.parseNumbers('1234 1234 1234 1234 1234 1234 1234 1234 1234 1234')).toStrictEqual([1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234]);
    });
});