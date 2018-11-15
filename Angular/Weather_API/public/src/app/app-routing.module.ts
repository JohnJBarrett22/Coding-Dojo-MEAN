import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
// import { LandingComponent } from './landing/landing.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DCComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent} from './burbank/burbank.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'dallas',
    component: DallasComponent,
  },
  {
    path: 'seattle',
    component: SeattleComponent
  },
  {
    path: 'sanjose',
    component: SanJoseComponent
  },
  {
    path: 'burbank',
    component: BurbankComponent
  },
  {
    path: 'dc',
    component: DCComponent
  },
  {
    path: 'chicago',
    component: ChicagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
