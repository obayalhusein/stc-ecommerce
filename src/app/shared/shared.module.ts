import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorLogoComponent } from './components/vector-logo/vector-logo.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

const MatAngularModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [
    VectorLogoComponent,
  ],
  imports: [
    CommonModule,
    MatAngularModules,
  ],
  exports: [
    VectorLogoComponent,
    MatAngularModules,
  ],
})

export class SharedModule { }
