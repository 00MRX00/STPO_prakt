export class Prakt {
    constructor() {
        this.Character = {
            MORE: 0,
            LESS: 1
        }
    }

    parseNumbers(value) {
        const nums = value.split(' ').filter(num => num.length === 4 && +num === parseInt(num)).map(num => +num);
        return nums;
    }

    isSimp(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    firstDigitCheck(num, sym) {
        const strNum = num.toString();
        switch (sym) {
            case this.Character.MORE:
                return +strNum[0] > +strNum[strNum.length - 1];
            case this.Character.LESS:
                return +strNum[0] < +strNum[strNum.length - 1];
            default:
                return false;
        }
    }

    calculateResult(nums, character) {
        return nums.filter(num => this.isSimp(num) && this.firstDigitCheck(num, character))
    }
}