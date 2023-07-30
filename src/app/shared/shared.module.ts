import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorLogoComponent } from './components/vector-logo/vector-logo.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const MatAngularModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
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
