import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';
import { ModelPageComponent } from './pages/model-page/model-page.component';

@NgModule({
  declarations: [HeaderComponent, StatsCardsComponent, ModelPageComponent],
  imports: [CommonModule, ButtonModule, RippleModule],
  exports: [HeaderComponent, StatsCardsComponent],
})
export class CoreModule {}
