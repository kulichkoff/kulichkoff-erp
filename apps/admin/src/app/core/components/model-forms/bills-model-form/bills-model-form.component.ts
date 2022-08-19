import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ICargoTransportationBill } from '@app/api-interfaces';
import { saveAs } from 'file-saver';
import { CustomersService } from '../../../services/customers.service';
import { BillsService } from '../../../services/bills.service';
import { MessageService } from 'primeng/api';
import {
    catchError,
    EMPTY,
} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-bills-model-form',
    templateUrl: './bills-model-form.component.html',
    styleUrls: ['./bills-model-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsModelFormComponent implements OnInit {

    public modelForm: FormGroup = this.fb.group({
        number: ['', Validators.required],
        customerName: '',
        contractNumber: '',
        fromDate: new Date().toLocaleDateString('ru-RU'),
        totalPrice: 0, // renders on the server
        services: this.fb.array([
            this.fb.group({
                type: 'cargo_transportation',
                description: '', // renders on the server
                count: 1,
                price: '',
                sending: this.fb.array([
                    this.fb.group({
                        point: '',
                        date: '',
                    }),
                ]),
                unloading: this.fb.array([
                    this.fb.group({
                        point: '',
                        date: '',
                    }),
                ]),
            }),
        ]),
    });

    public customersResult: string[] = [];

    private customersList: string[] = [];

    constructor(
        private readonly fb: FormBuilder,
        private readonly customersService: CustomersService,
        private readonly billsService: BillsService,
        private readonly messageService: MessageService,
    ) {}

    public ngOnInit() {
        this.customersService.getAll()
            .subscribe((customers) => {
                this.customersList = customers.map(
                    (customer) => `${customer.name}, ${customer.city}, ИНН ${customer.inn}`,
                );
            });
    }

    public get servicesArray(): FormArray {
        return this.modelForm.controls['services'] as FormArray;
    }

    public get sendingArray(): FormArray {
        return (this.servicesArray.controls[0] as FormGroup).controls['sending'] as FormArray;
    }

    public get unloadingArray(): FormArray {
        return (this.servicesArray.controls[0] as FormGroup).controls['unloading'] as FormArray;
    }

    public get modelFormValue(): ICargoTransportationBill {
        return {
            ...this.modelForm.value,
            customer: {
                name: this.modelForm.value.customerName,
            },
        } as ICargoTransportationBill;
    }

    public onSubmit() {
        console.log(this.modelFormValue);
        this.billsService.generateReport(this.modelFormValue)
            .subscribe((file) => {
                saveAs(file, `Счет_Акт №${this.modelFormValue.number}.docx`);
            });

        this.billsService.saveBill(this.modelFormValue)
            .pipe(
                catchError((err) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Произошла какая-то ошибка',
                        detail: `
                            Убедитесь, что все поля заполнены правильно. 
                            Код ошибки: ${(err as HttpErrorResponse).status} | ${(err as HttpErrorResponse).statusText}
                        `,
                    });
                    console.error(err);
                    return EMPTY;
                }),
            )
            .subscribe(() => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Успешно сохранено',
                    detail: 'Если новый счет не появился в таблице, перезагрузите страницу',
                });
            });
    }

    public searchCustomerName(event: { query: string }) {
        this.customersResult = this.customersList.filter(
            (customer) => customer.toLowerCase().includes(event.query.toLowerCase()),
        );
    }

    public getMinimalDate(serviceIdx: number, unloadingIdx: number): Date {
        const dateString = this.modelFormValue
            .services[serviceIdx]
            .sending[unloadingIdx]
            .date
            .replace(/(\d\d)\.(\d\d)\.(\d\d\d\d)/, '$2/$1/$3');
        return new Date(Date.parse(dateString)) || null;
    }
}
