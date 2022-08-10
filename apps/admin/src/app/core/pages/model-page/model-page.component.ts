import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-model-page',
    templateUrl: './model-page.component.html',
    styleUrls: ['./model-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelPageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
