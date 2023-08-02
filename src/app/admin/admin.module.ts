import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin.routing';

// Layouts
import { AdminLayoutComponent } from './layouts/default/admin-layout.component';

// Pages
import { AdminHomePageComponent } from './pages/home/admin-home-page.component';
import { AdminProductsPageComponent } from './pages/products/admin-products-page.component';
import { AdminCategoriesPageComponent } from './pages/categories/admin-categories-page.component';
import { AdminOrdersPageComponent } from './pages/orders/admin-orders-page.component';

// Components
import { ProductsTableComponent } from './components/products/show-table/products-table.component';
import { ProductsNewDialogComponent } from './components/products/create-dialog/products-new-dialog.component';
import { ProductsDeleteDialogComponent } from './components/products/delete-dialog/products-delete-dialog.component';
import { ProductsEditDialogComponent } from './components/products/edit-dialog/products-edit-dialog.component';
import { CategoriesTableComponent } from './components/categories/show-table/categories-table.component';
import { CategoriesDeleteDialogComponent } from './components/categories/delete-dialog/categories-delete-dialog.component';
import { CategoriesEditDialogComponent } from './components/categories/edit-dialog/categories-edit-dialog.component';
import { CategoriesNewDialogComponent } from './components/categories/create-dialog/categories-new-dialog.component';


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
    CategoriesTableComponent,
    CategoriesNewDialogComponent,
    CategoriesEditDialogComponent,
    CategoriesDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
