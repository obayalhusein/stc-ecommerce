import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { LandingLayoutComponent } from './layouts/default/landing-layout.component';
import { LandingHomePageComponent } from './pages/home/landing-home-page.component';
import { SharedModule } from '../shared/shared.module';
import { LandingFooterComponent } from './layouts/components/landing-footer/landing-footer.component';
import { LandingHeaderComponent } from './layouts/components/landing-header/landing-header.component';

@NgModule({
  declarations: [
    LandingLayoutComponent,
    LandingHomePageComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ]
})
export class LandingModule { }
