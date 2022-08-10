import { Component } from '@angular/core';
import { Message } from '@app/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    hello$ = this.http.get<Message>('/api/hello');

    constructor(
        private http: HttpClient,
    ) {}
}
