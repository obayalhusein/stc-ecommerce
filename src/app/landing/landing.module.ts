import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { SharedModule } from '../shared/shared.module';

// Layouts
import { LandingLayoutComponent } from './layouts/default/landing-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

// Pages
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';
import { LandingHomePageComponent } from './pages/home/landing-home-page.component';

// Components
import { LandingFooterComponent } from './layouts/components/landing-footer/landing-footer.component';
import { LandingHeaderComponent } from './layouts/components/landing-header/landing-header.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LandingLayoutComponent,
    LandingHomePageComponent,
    AuthLayoutComponent,
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
