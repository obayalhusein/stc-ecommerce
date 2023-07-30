import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

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
import { ProductsGridListComponent } from './components/products-grid-list/products-grid-list.component';
import { ProductCardItemComponent } from './components/product-card-item/product-card-item.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LandingLayoutComponent,
    LandingHomePageComponent,
    AuthLayoutComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    ProductsGridListComponent,
    ProductCardItemComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class LandingModule { }
