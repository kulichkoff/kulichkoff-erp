import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@app/ui';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        RouterModule,
        UiModule,
        HttpClientModule,
        ButtonModule,
        RippleModule,
        CoreModule,
        AppRoutingModule,
        ToastModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
