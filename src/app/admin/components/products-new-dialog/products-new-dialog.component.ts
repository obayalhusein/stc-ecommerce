import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminProductsService } from '../../services/admin-products.service';

@Component({
  selector: 'app-products-new-dialog',
  templateUrl: './products-new-dialog.component.html',
  styleUrls: ['./products-new-dialog.component.scss']
})
export class ProductsNewDialogComponent implements OnInit {
  isSubmitting: boolean = false;

  constructor(private _dialogRef: MatDialogRef<ProductsNewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,  private _adminProductsService: AdminProductsService) { }

  ngOnInit() {
  }

}
