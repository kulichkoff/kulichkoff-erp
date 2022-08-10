import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StatsCardsComponent } from './stats-cards/stats-cards.component';

@NgModule({
  declarations: [HeaderComponent, StatsCardsComponent],
  imports: [CommonModule, ButtonModule, RippleModule],
    exports: [HeaderComponent, StatsCardsComponent],
})
export class CoreModule {}
