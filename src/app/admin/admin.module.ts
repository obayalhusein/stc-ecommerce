import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { SharedModule } from '../shared/shared.module';

// Layouts
import { AdminLayoutComponent } from './layouts/default/admin-layout.component';

// Pages
import { AdminHomePageComponent } from './pages/home/admin-home-page.component';
import { AdminProductsPageComponent } from './pages/products/admin-products-page.component';
import { AdminCategoriesPageComponent } from './pages/categories/admin-categories-page.component';
import { AdminOrdersPageComponent } from './pages/orders/admin-orders-page.component';

// Components
import { ProductsTableComponent } from './components/products-table/products-table.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHomePageComponent,
    AdminCategoriesPageComponent,
    AdminProductsPageComponent,
    AdminOrdersPageComponent,
    ProductsTableComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
