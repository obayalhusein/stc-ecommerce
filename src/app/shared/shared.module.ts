import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VectorLogoComponent } from './components/vector-logo/vector-logo.component';

const MatAngularModules = [
  MatToolbarModule,
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
