import {
    Pipe,
    PipeTransform,
} from '@angular/core';

@Pipe({
    name: 'currency',
})
export class CurrencyPipe implements PipeTransform {

    public transform(value: number, currency?: string, toFixedDigits?: number): string {
        const floatingParts = value.toString().split('.');

        floatingParts[0] = [...floatingParts[0]].reverse().join('')
            .replace(/(\d{3})/g, '$1 ')
            .trim();

        floatingParts[0] = [...floatingParts[0]].reverse().join('');

        if (toFixedDigits) {
            if (!floatingParts[1]) {
                floatingParts[1] = '00';
            }

            while (floatingParts[1].length < toFixedDigits) {
                floatingParts[1] = `${floatingParts[1]}0`;
            }

            if (floatingParts[1].length > toFixedDigits) {
                floatingParts[1] = floatingParts[1].substring(0, toFixedDigits);
            }
        }

        const number = floatingParts.join(',');

        const currencyUpper = currency?.toUpperCase();

        switch (currencyUpper) {
            case 'USD':
                return `${number} $`;
            case 'RUB':
                return `${number} ₽`;
            case 'EUR':
                return `${number} €`;
            default:
                return number;
        }
    }

}
