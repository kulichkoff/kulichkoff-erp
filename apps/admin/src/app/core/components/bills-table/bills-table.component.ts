import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';
import { ICargoTransportationBill } from '@app/api-interfaces';
import { HttpClient } from '@angular/common/http';
import {
    delay,
    Observable,
} from 'rxjs';
import { PlatformDetectService } from '../../services/platform-detect.service';

@Component({
    selector: 'app-bills-table',
    templateUrl: './bills-table.component.html',
    styleUrls: ['./bills-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsTableComponent implements OnInit {
    public bills$?: Observable<ICargoTransportationBill[]>;

    constructor(
        private readonly http: HttpClient,
        private readonly platformDetectService: PlatformDetectService,
    ) {}

    public ngOnInit() {
        if (!this.platformDetectService.isServer) {
            this.bills$ = this.http.get<ICargoTransportationBill[]>('http://kulichkoff.space:3030/bills')
                .pipe(delay(1000));
        }
    }
}
