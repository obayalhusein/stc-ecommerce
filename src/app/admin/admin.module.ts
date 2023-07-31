import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { AdminLayoutComponent } from './layouts/default/admin-layout.component';
import { AdminHomePageComponent } from './pages/home/admin-home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AdminProductsPageComponent } from './pages/admin-products-page/admin-products-page.component';
import { AdminCategoriesPageComponent } from './pages/admin-categories-page/admin-categories-page.component';
import { AdminOrdersPageComponent } from './pages/admin-orders-page/admin-orders-page.component';

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
