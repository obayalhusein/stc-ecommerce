import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminProductsService } from '../../services/admin-products.service';
import { AdminCategoriesService } from '../../services/admin-categories.service';
import { environment } from 'src/enviremonets';

@Component({
  selector: 'app-products-edit-dialog',
  templateUrl: './products-edit-dialog.component.html',
  styleUrls: ['./products-edit-dialog.component.scss']
})
export class ProductsEditDialogComponent implements OnInit {
  isSubmitting: boolean = false;
  categories: Array<any> = [];
  selectedImages: any[] = [];
  formData = {
    preview: [],
    title: '',
    category: '',
    description: '',
    quantity: 0,
    price: 0,
    discount: 0
  };

  constructor(private _dialogRef: MatDialogRef<ProductsEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _adminProductsService: AdminProductsService, private _adminCategoriesService: AdminCategoriesService) { }

  ngOnInit() {
    this.fetchCategoriesData();
    this.setProductInitData();
  }

  fetchCategoriesData() {
    this._adminCategoriesService.getCategoriesApi().subscribe({
      next: (result) => {
        this.categories = result.data;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  setProductInitData() {
    this.formData.title = this.data.product.attributes.title;
    this.formData.description = this.data.product.attributes.description;
    this.formData.quantity = this.data.product.attributes.quantity;
    this.formData.price = this.data.product.attributes.price;
    this.formData.discount = this.data.product.attributes.discount;
    this.formData.category = this.data.product.attributes.category.data.id;
    this.formData.preview = this.data.product.attributes.preview.data.map((element: any) => element.id);
    this.selectedImages = this.data.product.attributes.preview.data.map((element: any) => environment.baseUrl + element.attributes.url);
  }

  onFilesSelected(event: any): void {
    this.selectedImages = [];
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImages.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
    this.formData.preview = files;
  }

  onSubmit(): void {
    const data = new FormData();
    data.append('data', JSON.stringify(this.formData));
    if(this.formData.preview.length) {
      for (const file of this.formData.preview) {
        data.append('files.preview', file);
      }
    }

    this._adminProductsService.updateProductApi(data, this.data.product.id).subscribe({
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
