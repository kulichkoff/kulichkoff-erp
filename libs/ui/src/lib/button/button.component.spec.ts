import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit an event on click', function () {
        const debugEl: HTMLElement = fixture.debugElement.nativeElement;

        component.clicked
            .subscribe(() => {
                expect(true).toBeTruthy();
            })

        debugEl.click();
    });
});
