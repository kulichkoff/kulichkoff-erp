import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    RouterModule,
    Routes,
} from '@angular/router';
import { ModelPageComponent } from './core/pages/model-page/model-page.component';


const ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: ModelPageComponent },
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES),
    ],
})
export class AppRoutingModule {
}
