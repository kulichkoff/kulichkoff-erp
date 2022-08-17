import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '@app/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CustomersService {

    constructor(
        private http: HttpClient,
    ) {}

    public getAll(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>('/api/data/customer')
    }

}
