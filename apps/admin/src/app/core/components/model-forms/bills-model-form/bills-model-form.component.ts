import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ICargoTransportationBill } from '@app/api-interfaces';

@Component({
    selector: 'app-bills-model-form',
    templateUrl: './bills-model-form.component.html',
    styleUrls: ['./bills-model-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsModelFormComponent {

    public modelForm: FormGroup = this.fb.group({
        number: ['', Validators.required],
        customerId: ['', Validators.required],
        customerName: '',
        contractNumber: '',
        totalPrice: 0,
        services: this.fb.array([
            this.fb.group({
                type: 'cargo_transportation',
                description: '',
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

    constructor(
        private readonly fb: FormBuilder,
    ) {}

    public get modelFormValue(): ICargoTransportationBill {
        return this.modelForm.value as ICargoTransportationBill;
    }

    public onSubmit() {
        console.log(this.modelFormValue);
    }
}
