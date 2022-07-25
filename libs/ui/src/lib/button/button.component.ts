import {
    Component,
    EventEmitter,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

    @Output()
    public clicked = new EventEmitter;

    public onBtnClick() {
        this.clicked.emit();
    }
}
