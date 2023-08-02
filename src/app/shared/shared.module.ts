import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';


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
  MatSelectModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [
    VectorLogoComponent,
    SkeletonLoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatAngularModules,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    VectorLogoComponent,
    MatAngularModules,
    SkeletonLoaderComponent,
  ],
})

export class SharedModule { }
