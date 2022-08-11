import { TestBed } from '@angular/core/testing';

import { PlatformDetectService } from './platform-detect.service';

describe('PlatformDetectService', () => {
    let service: PlatformDetectService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PlatformDetectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
