import {
    Inject,
    Injectable,
    PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class PlatformDetectService {

    public isServer = !isPlatformBrowser(this.platformId)

    constructor(
        @Inject(PLATFORM_ID) private platformId: never,
    ) { }
}
