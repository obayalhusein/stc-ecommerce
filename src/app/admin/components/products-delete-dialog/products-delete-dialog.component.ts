import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminProductsService } from '../../services/admin-products.service';

@Component({
  selector: 'app-products-delete-dialog',
  templateUrl: './products-delete-dialog.component.html',
  styleUrls: ['./products-delete-dialog.component.scss']
})
export class ProductsDeleteDialogComponent implements OnInit {
  isSubmitting: boolean = false;

  constructor(private _dialogRef: MatDialogRef<ProductsDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,  private _adminProductsService: AdminProductsService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isSubmitting = true;

    this._adminProductsService.deleteProductByIdApi(this.data.product.id).subscribe({
      next: (result) => {
        this._dialogRef.close({ isSubmitted: true });
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        this.isSubmitting = true;
      }
    });
  }

}
