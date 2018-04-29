import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { NgModule } from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

const routes: Routes = [
    { path: 'seattle', component: SeattleComponent },
    { path: 'sanjose', component: SanJoseComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'washington', component: WashingtonComponent },
    { path: 'chicago', component: ChicagoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
