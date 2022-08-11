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
    ],
  exports: [HeaderComponent, StatsCardsComponent],
})
export class CoreModule {}
