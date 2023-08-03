import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
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
import { LandingBottomNavigationComponent } from './layouts/components/landing-bottom-navigation/landing-bottom-navigation.component';
import { ProductsGridListComponent } from './components/products/grid-list/products-grid-list.component';
import { ProductCardItemComponent } from './components/products/card-item/product-card-item.component';
import { ProductCardItemSkeletonComponent } from './components/products/card-item-skeleton/product-card-item-skeleton.component';
import { AuthErrorAlertComponent } from './components/auth/error-alert/auth-error-alert.component';
import { CategoriesTabsComponent } from './components/categories/tabs/categories-tabs.component';
import { CategoriesTabsSkeletonComponent } from './components/categories/tabs-skeleton/categories-tabs-skeleton.component';
import { ProductShowCardSkeletonComponent } from './components/products/product-show-card-skeleton/product-show-card-skeleton.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LandingLayoutComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    LandingBottomNavigationComponent,
    LandingHomePageComponent,
    LandingProductsPageComponent,
    LandingProductsShowPageComponent,
    LandingCategoriesPageComponent,
    AuthLayoutComponent,
    AuthErrorAlertComponent,
    ProductsGridListComponent,
    ProductCardItemComponent,
    ProductCardItemSkeletonComponent,
    CategoriesTabsComponent,
    CategoriesTabsSkeletonComponent,
    ProductShowCardSkeletonComponent,
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
