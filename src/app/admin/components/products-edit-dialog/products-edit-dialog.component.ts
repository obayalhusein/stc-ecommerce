import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminProductsService } from '../../services/admin-products.service';

@Component({
  selector: 'app-products-edit-dialog',
  templateUrl: './products-edit-dialog.component.html',
  styleUrls: ['./products-edit-dialog.component.scss']
})
export class ProductsEditDialogComponent implements OnInit {
  isSubmitting: boolean = false;

  constructor(private _dialogRef: MatDialogRef<ProductsEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,  private _adminProductsService: AdminProductsService) { }

  ngOnInit() {
  }

}
