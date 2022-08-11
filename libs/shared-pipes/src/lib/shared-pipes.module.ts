import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [
        CurrencyPipe,
    ],
    exports: [
        CurrencyPipe,
    ],
    providers: [
        CurrencyPipe,
    ]
})
export class SharedPipesModule {
}
