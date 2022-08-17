import { TestBed } from '@angular/core/testing';

import { CustomersService } from './customers.service';
import { BillsService } from './bills.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

describe('CustomersService', () => {
    let service: BillsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ]
        });
        service = TestBed.inject(BillsService);
        httpMock = TestBed.inject(HttpTestingController);
    });
});
