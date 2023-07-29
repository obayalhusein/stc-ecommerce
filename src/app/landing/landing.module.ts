import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { LandingLayoutComponent } from './layouts/default/landing-layout.component';
import { LandingHomePageComponent } from './pages/home/landing-home-page.component';

@NgModule({
  declarations: [
    LandingLayoutComponent,
    LandingHomePageComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
