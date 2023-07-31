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
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';


const MatAngularModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatSortModule,
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDialogModule,
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
