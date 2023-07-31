import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsNewDialogComponent } from '../../components/products-new-dialog/products-new-dialog.component';
import { AdminProductsService } from '../../services/admin-products.service';

@Component({
  selector: 'app-admin-products-page',
  templateUrl: './admin-products-page.component.html',
  styleUrls: ['./admin-products-page.component.scss']
})
export class AdminProductsPageComponent implements OnInit {
  isLoadingData: boolean = true;
  productsList: Array<any> = [];

  constructor(public dialog: MatDialog, private _adminProductsService: AdminProductsService) { }

  ngOnInit() {
    this.fetchProductsData();
  }

  fetchProductsData() {
    this._adminProductsService.getProductsApi().subscribe({
      next: (result) => {
        this.productsList = result.data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        this.isLoadingData = false;
      }
    });
  }

  showNewProductDialog() {
    const dialogRef = this.dialog.open(ProductsNewDialogComponent, {} );

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data?.isSubmitted) {
        this.fetchProductsData();
      }
    });
  }

}
