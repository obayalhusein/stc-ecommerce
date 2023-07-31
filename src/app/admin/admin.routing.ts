import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/default/admin-layout.component';
import { AdminHomePageComponent } from './pages/home/admin-home-page.component';
import { AdminCategoriesPageComponent } from './pages/admin-categories-page/admin-categories-page.component';
import { AdminProductsPageComponent } from './pages/admin-products-page/admin-products-page.component';
import { AdminOrdersPageComponent } from './pages/admin-orders-page/admin-orders-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminHomePageComponent },
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'categories', component: AdminCategoriesPageComponent },
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'products', component: AdminProductsPageComponent },
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'orders', component: AdminOrdersPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
