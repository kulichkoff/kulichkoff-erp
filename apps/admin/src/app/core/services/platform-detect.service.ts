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

    /**
     * Is the current session running on the server?
     *
     * The variable helps with **SSR**. For example, block concrete data request to Data server.
     */
    public isServer = !isPlatformBrowser(this.platformId)

    constructor(
        @Inject(PLATFORM_ID) private platformId: never,
    ) { }
}
