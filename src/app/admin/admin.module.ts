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
import { ProductsNewDialogComponent } from './components/products-new-dialog/products-new-dialog.component';
import { ProductsDeleteDialogComponent } from './components/products-delete-dialog/products-delete-dialog.component';
import { ProductsEditDialogComponent } from './components/products-edit-dialog/products-edit-dialog.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHomePageComponent,
    AdminCategoriesPageComponent,
    AdminProductsPageComponent,
    AdminOrdersPageComponent,
    ProductsTableComponent,
    ProductsNewDialogComponent,
    ProductsEditDialogComponent,
    ProductsDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
