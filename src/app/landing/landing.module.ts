import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { LandingLayoutComponent } from './layouts/default/landing-layout.component';
import { LandingHomePageComponent } from './pages/home/landing-home-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingLayoutComponent,
    LandingHomePageComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ]
})
export class LandingModule { }
