import { Prakt } from './appController';

let appContr = new Prakt();

describe('App test', () => {
    test('IsSimp function', () => {
        expect(appContr.isSimp(12)).toStrictEqual(false);
        expect(appContr.isSimp(0)).toStrictEqual(false);
        expect(appContr.isSimp(-5)).toStrictEqual(false);
        expect(appContr.isSimp(-6)).toStrictEqual(false);
        expect(appContr.isSimp(5)).toStrictEqual(true);
    });

    test('FirstDigitCheck function', () => {
        expect(appContr.firstDigitCheck(1234, appContr.Character.MORE)).toStrictEqual(false);
        expect(appContr.firstDigitCheck(1231, appContr.Character.MORE)).toStrictEqual(false);
        expect(appContr.firstDigitCheck(4561, appContr.Character.MORE)).toStrictEqual(true);

        expect(appContr.firstDigitCheck(4321, appContr.Character.LESS)).toStrictEqual(false);
        expect(appContr.firstDigitCheck(1231, appContr.Character.LESS)).toStrictEqual(false);
        expect(appContr.firstDigitCheck(1657, appContr.Character.LESS)).toStrictEqual(true);
    });

    test('CalculateResult function', () => {
        expect(appContr.calculateResult([1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234], appContr.Character.MORE)).toStrictEqual([]);
        expect(appContr.calculateResult([1234, 1234, 1234, 3671, 1234, 1234, 1234, 1234, 1234, 5231], appContr.Character.MORE)).toStrictEqual([3671, 5231]);
        expect(appContr.calculateResult([1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1231], appContr.Character.MORE)).toStrictEqual([]);

        expect(appContr.calculateResult([1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234], appContr.Character.LESS)).toStrictEqual([]);
        expect(appContr.calculateResult([1234, 1234, 1234, 2273, 1234, 1234, 1234, 1234, 1234, 2237], appContr.Character.LESS)).toStrictEqual([2273, 2237]);
        expect(appContr.calculateResult([1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 2232], appContr.Character.LESS)).toStrictEqual([]);
    });

    test('ParseNumbers function', () => {
        expect(appContr.parseNumbers('1234 1234 1234 1234 1234 1234 1234 1234 1234 1234')).toStrictEqual([1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234, 1234]);
        expect(appContr.parseNumbers('1234 12 1 0')).toStrictEqual([1234]);
        expect(appContr.parseNumbers('1234 gfg 1234 qwer')).toStrictEqual([1234, 1234]);
        expect(appContr.parseNumbers('1234e  1234 ')).toStrictEqual([1234]);
        expect(appContr.parseNumbers('qwerqwer qwerqwer')).toStrictEqual([]);
        expect(appContr.parseNumbers('')).toStrictEqual([]);
    });

    test('CalculateResult function', () => {
        expect(appContr.conclude('1234 1234 1234 1234 1234 1234 1234 1234 1234 1234', appContr.Character.MORE)).toStrictEqual([[], '', 'Нет элементов, удовлетворяющих условию(']);
        expect(appContr.conclude('1234 1234 1234 3671 1234 1234 1234 1234 1234 5231', appContr.Character.MORE)).toStrictEqual([[3671, 5231], '', '']);
        expect(appContr.conclude('1234 1234 1234 1234 1234 1234 1234 1234 1234 1231', appContr.Character.MORE)).toStrictEqual([[], '', 'Нет элементов, удовлетворяющих условию(']);
        expect(appContr.conclude('1234 1234 1234 1234 1234  g 1234 1234 1234 1234   g 1231', appContr.Character.MORE)).toStrictEqual([[], 'Значения заполнены некорректно', '']);
        expect(appContr.conclude('1234 1234 1234 1234 1234 234 1234 1234 1234 2313', appContr.Character.MORE)).toStrictEqual([[], 'Значения заполнены некорректно', '']);
        expect(appContr.conclude('', appContr.Character.MORE)).toStrictEqual([[], 'Нужно ввести 10 чисел!', '']);
        expect(appContr.conclude('esfdg', appContr.Character.MORE)).toStrictEqual([[], 'Значения заполнены некорректно', '']);
        expect(appContr.conclude('12', appContr.Character.MORE)).toStrictEqual([[], 'Значения заполнены некорректно', '']);
        expect(appContr.conclude('3671', appContr.Character.MORE)).toStrictEqual([[], 'Нужно ввести 10 чисел!', '']);

        expect(appContr.conclude('1234 1234 1234 1234 1234 1234 1234 1234 1234 1234', appContr.Character.LESS)).toStrictEqual([[], '', 'Нет элементов, удовлетворяющих условию(']);
        expect(appContr.conclude('1234 1234 1234 2273 1234 1234 1234 1234 1234 2237', appContr.Character.LESS)).toStrictEqual([[2273, 2237], '', '']);
        expect(appContr.conclude('1234 1234 1234 1234 1234 1234 1234 1234 1234 2232', appContr.Character.LESS)).toStrictEqual([[], '', 'Нет элементов, удовлетворяющих условию(']);
        expect(appContr.conclude('1234 1234 1234 1234 1234  g 1234 1234 1234 1234   g 1231', appContr.Character.LESS)).toStrictEqual([[], 'Значения заполнены некорректно', '']);
        expect(appContr.conclude('1234 1234 1234 1234 1234 234 1234 1234 1234 2313', appContr.Character.LESS)).toStrictEqual([[], 'Значения заполнены некорректно', '']);
        expect(appContr.conclude('', appContr.Character.LESS)).toStrictEqual([[], 'Нужно ввести 10 чисел!', '']);
        expect(appContr.conclude('esfdg', appContr.Character.LESS)).toStrictEqual([[], 'Значения заполнены некорректно', '']);
        expect(appContr.conclude('12', appContr.Character.LESS)).toStrictEqual([[], 'Значения заполнены некорректно', '']);
        expect(appContr.conclude('2237', appContr.Character.LESS)).toStrictEqual([[], 'Нужно ввести 10 чисел!', '']);
    });
});