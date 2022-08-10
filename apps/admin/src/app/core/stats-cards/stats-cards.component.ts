import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

@Component({
    selector: 'app-stats-cards',
    templateUrl: './stats-cards.component.html',
    styleUrls: ['./stats-cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCardsComponent {
    public stats = [
        {
            label: 'Заказы',
            count: 152,
            newSinceMonth: -2,
            icon: { label: 'pi-shopping-cart', color: 'blue' },
            type: 'count',
            growth: 'negative',
        },
        {
            label: 'Доход',
            count: 500000,
            newSinceMonth: 30000,
            icon: { label: 'pi-dollar', color: 'green' },
            type: 'money', // TODO: CurrencyPipe, который оставит все как было, если не money.
            currency: 'RUB',
            growth: 'positive',
        },
        {
            label: 'Клиенты',
            count: 4,
            newSinceMonth: 1,
            icon: { label: 'pi-users', color: 'orange' },
            type: 'count',
            growth: 'positive',
        },
    ];
}
