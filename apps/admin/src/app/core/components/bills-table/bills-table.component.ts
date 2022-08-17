import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';
import { ICargoTransportationBill } from '@app/api-interfaces';
import { Observable } from 'rxjs';
import { PlatformDetectService } from '../../services/platform-detect.service';
import { BillsService } from '../../services/bills.service';

@Component({
    selector: 'app-bills-table',
    templateUrl: './bills-table.component.html',
    styleUrls: ['./bills-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsTableComponent implements OnInit {
    public bills$?: Observable<ICargoTransportationBill[]>;
    public modelFormDisplayed = false;

    constructor(
        private readonly platformDetectService: PlatformDetectService,
        private readonly billsService: BillsService,
    ) {}

    public ngOnInit() {
        if (!this.platformDetectService.isServer) {
            this.bills$ = this.billsService.getAll();
        }
    }

    public onAddBtnClicked() {
        this.displayModelForm();
    }

    private displayModelForm() {
        this.modelFormDisplayed = true;
    }
}
