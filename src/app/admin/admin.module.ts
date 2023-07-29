import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { AdminLayoutComponent } from './layouts/default/admin-layout.component';
import { AdminHomePageComponent } from './pages/home/admin-home-page.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHomePageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
