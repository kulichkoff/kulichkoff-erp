import {
    Pipe,
    PipeTransform,
} from '@angular/core';

@Pipe({
    name: 'currency',
})
export class CurrencyPipe implements PipeTransform {

    public transform(value: number, currency?: string): string {
        const floatingParts = value.toString().split('.');

        floatingParts[0] = [...floatingParts[0]].reverse().join('')
            .replace(/(\d{3})/g, '$1 ')
            .trim();

        floatingParts[0] = [...floatingParts[0]].reverse().join('');

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
