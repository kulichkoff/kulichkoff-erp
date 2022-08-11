import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import { ICargoTransportationBill } from '@app/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Component({
    selector: 'app-bills-table',
    templateUrl: './bills-table.component.html',
    styleUrls: ['./bills-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsTableComponent {
    public bills$ = this.http.get<ICargoTransportationBill[]>('http://kulichkoff.space:3030/bills')
        .pipe(delay(1000));

    constructor(
        private readonly http: HttpClient,
    ) {}
}
