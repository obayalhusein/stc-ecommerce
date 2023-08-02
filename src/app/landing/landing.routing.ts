import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/default/landing-layout.component';
import { LandingHomePageComponent } from './pages/home/landing-home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LandingProductsPageComponent } from './pages/products/landing-products-page.component';
import { LandingProductsShowPageComponent } from './pages/products/show/landing-products-show-page.component';
import { LandingCategoriesPageComponent } from './pages/categories/landing-categories-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: LandingHomePageComponent },
    ]
  },
  {
    path: 'products',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: LandingProductsPageComponent },
      { path: ':id', component: LandingProductsShowPageComponent },
    ]
  },
  {
    path: 'categories',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: LandingCategoriesPageComponent },
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginPageComponent },
    ]
  },
  {
    path: 'register',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: RegisterPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
