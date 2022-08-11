import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { BillsModelFormComponent } from './bills-model-form.component';

describe('BillsModelFormComponent', () => {
    let component: BillsModelFormComponent;
    let fixture: ComponentFixture<BillsModelFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BillsModelFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BillsModelFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
