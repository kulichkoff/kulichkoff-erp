import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICargoTransportationBill } from '@app/api-interfaces';

@Injectable({
    providedIn: 'root',
})
export class BillsService {

    constructor(
        private readonly http: HttpClient,
    ) {}

    public getAll(): Observable<ICargoTransportationBill[]> {
        return this.http.get<ICargoTransportationBill[]>('/api/data/bill');
    }

    public getLastBillNumber(): Observable<number> {
        return this.http.get<number>('/api/data/bill/last');
    }

    public saveBill(billData: ICargoTransportationBill): Observable<ICargoTransportationBill> {
        return this.http.post<ICargoTransportationBill>('/api/data/bill', billData);
    }

    public generateReport(billData: ICargoTransportationBill): Observable<Blob> {
        return this.http.post('/api/templates/bills', billData, { responseType: 'blob' })
    }
}
