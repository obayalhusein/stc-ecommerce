import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { AdminLayoutComponent } from './layouts/default/admin-layout.component';
import { AdminHomePageComponent } from './pages/home/admin-home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AdminProductsPageComponent } from './pages/products/admin-products-page.component';
import { AdminCategoriesPageComponent } from './pages/categories/admin-categories-page.component';
import { AdminOrdersPageComponent } from './pages/orders/admin-orders-page.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHomePageComponent,
    AdminCategoriesPageComponent,
    AdminProductsPageComponent,
    AdminOrdersPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
