import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
    it('should separate every three numbers', () => {
        const pipe = new CurrencyPipe();
        expect(pipe.transform(12000)).toBe('12 000');
        expect(pipe.transform(123456789)).toBe('123 456 789');
        expect(pipe.transform(233)).toBe('233');
        expect(pipe.transform(8)).toBe('8');
    });

    it('should add floating number after comma', () => {
        const pipe = new CurrencyPipe();
        expect(pipe.transform(4.5)).toBe('4,5');
        expect(pipe.transform(455.9)).toBe('455,9');
        expect(pipe.transform(658.123)).toBe('658,123');
    });

    it('should add currency character at end', () => {
        const pipe = new CurrencyPipe();
        expect(pipe.transform(4.5, 'USD')).toBe('4,5 $');
        expect(pipe.transform(4.5,'RUB')).toBe('4,5 ₽');
        expect(pipe.transform(4.5, 'EUR')).toBe('4,5 €');
        expect(pipe.transform(4.5, 'AAA')).toBe('4,5');
    })

    it('should take lower case of currency too', () => {
        const pipe = new CurrencyPipe();
        expect(pipe.transform(8.4, 'uSd')).toBe('8,4 $');
        expect(pipe.transform(8.4, 'rub')).toBe('8,4 ₽');
        expect(pipe.transform(8.4, 'euR')).toBe('8,4 €');
        expect(pipe.transform(8.4, 'aAa')).toBe('8,4');
    })
});
