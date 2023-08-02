import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing.routing';
import { HttpClientModule } from '@angular/common/http';

// Layouts
import { LandingLayoutComponent } from './layouts/default/landing-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

// Pages
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';
import { LandingHomePageComponent } from './pages/home/landing-home-page.component';
import { LandingProductsPageComponent } from './pages/products/landing-products-page.component';
import { LandingProductsShowPageComponent } from './pages/products/show/landing-products-show-page.component';
import { LandingCategoriesPageComponent } from './pages/categories/landing-categories-page.component';

// Components
import { LandingFooterComponent } from './layouts/components/landing-footer/landing-footer.component';
import { LandingHeaderComponent } from './layouts/components/landing-header/landing-header.component';
import { ProductsGridListComponent } from './components/products-grid-list/products-grid-list.component';
import { ProductCardItemComponent } from './components/product-card-item/product-card-item.component';
import { ProductCardItemSkeletonComponent } from './components/product-card-item-skeleton/product-card-item-skeleton.component';
import { AuthErrorAlertComponent } from './components/auth-error-alert/auth-error-alert.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LandingLayoutComponent,
    LandingHomePageComponent,
    LandingProductsPageComponent,
    LandingProductsShowPageComponent,
    LandingCategoriesPageComponent,
    AuthLayoutComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    ProductsGridListComponent,
    ProductCardItemComponent,
    ProductCardItemSkeletonComponent,
    AuthErrorAlertComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LandingRoutingModule,
    HttpClientModule,
  ]
})
export class LandingModule { }
