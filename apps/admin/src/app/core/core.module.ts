import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';
import { ModelPageComponent } from './pages/model-page/model-page.component';
import { BillsTableComponent } from './components/bills-table/bills-table.component';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpClientModule } from '@angular/common/http';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
    declarations: [
        HeaderComponent,
        StatsCardsComponent,
        ModelPageComponent,
        BillsTableComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        RippleModule,
        TableModule,
        ProgressSpinnerModule,
        HttpClientModule,
        ContextMenuModule,
    ],
    exports: [
        HeaderComponent,
        StatsCardsComponent,
    ],
})
export class CoreModule {
}
