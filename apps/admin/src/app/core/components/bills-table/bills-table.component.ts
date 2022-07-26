import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';
import { ICargoTransportationBill } from '@app/api-interfaces';
import { Observable } from 'rxjs';
import { PlatformDetectService } from '../../services/platform-detect.service';
import { BillsService } from '../../services/bills.service';
import { MenuItem } from 'primeng/api';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-bills-table',
    templateUrl: './bills-table.component.html',
    styleUrls: ['./bills-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsTableComponent implements OnInit {

    public bills$?: Observable<ICargoTransportationBill[]>;
    public selectedBill?: ICargoTransportationBill;

    public modelFormDisplayed = false;

    public contextMenu: MenuItem[] = [
        {
            label: 'Скачать документ',
            icon: 'pi pi-file',
            command: () => {
                if (!this.selectedBill) {
                    throw new Error('No selected bill');
                }
                const selectedBillCpy = JSON.parse(JSON.stringify(this.selectedBill));
                this.billsService.generateReport(selectedBillCpy)
                    .subscribe((file) => {
                        saveAs(file, `Счет_Акт №${selectedBillCpy.number}.docx`);
                    });
            }
        }
    ];

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
