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
import {
    ICargoTransportationBill,
    ICustomer,
} from '@app/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

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
        private readonly http: HttpClient,
    ) {}

    public ngOnInit() {
        this.http.get<ICustomer[]>('/api/data/customer')
            .subscribe((customers) => {
                this.customersList = customers.map((customer) => customer.name);
            })
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
                name: this.modelForm.value.customerName
            }
        } as ICargoTransportationBill;
    }

    public onSubmit() {
        console.log(this.modelFormValue);
        this.http.post('/api/templates/bills', this.modelFormValue, { responseType: 'blob' })
            .subscribe((file) => {
                saveAs(file, `Счет_Акт №${this.modelFormValue.number}.docx`);
            });

        this.http.post('/api/data/bill', this.modelFormValue)
            .subscribe((data) => {
                console.log(data);
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
