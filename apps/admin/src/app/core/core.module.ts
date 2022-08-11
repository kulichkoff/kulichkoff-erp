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
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { BillsModelFormComponent } from './components/model-forms/bills-model-form/bills-model-form.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { SharedPipesModule } from '@app/shared-pipes';

@NgModule({
    declarations: [
        HeaderComponent,
        StatsCardsComponent,
        ModelPageComponent,
        BillsTableComponent,
        BillsModelFormComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ButtonModule,
        RippleModule,
        TableModule,
        ProgressSpinnerModule,
        HttpClientModule,
        ContextMenuModule,
        ToolbarModule,
        InputTextModule,
        DialogModule,
        ReactiveFormsModule,
        AutoCompleteModule,
        InputNumberModule,
        DividerModule,
        CalendarModule,
        SharedPipesModule,
    ],
    exports: [HeaderComponent, StatsCardsComponent],
})
export class CoreModule {
}
