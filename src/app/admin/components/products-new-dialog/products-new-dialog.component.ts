import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminProductsService } from '../../services/admin-products.service';
import { AdminCategoriesService } from '../../services/admin-categories.service';

@Component({
  selector: 'app-products-new-dialog',
  templateUrl: './products-new-dialog.component.html',
  styleUrls: ['./products-new-dialog.component.scss']
})
export class ProductsNewDialogComponent implements OnInit {
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

  constructor(private _dialogRef: MatDialogRef<ProductsNewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _adminProductsService: AdminProductsService, private _adminCategoriesService: AdminCategoriesService) { }

  ngOnInit() {
    this.fetchCategoriesData();
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
    this.isSubmitting = true;

    const data = new FormData();
    data.append('data', JSON.stringify(this.formData));
    for (const file of this.formData.preview) {
      data.append('files.preview', file);
    }

    this._adminProductsService.storeProductApi(data).subscribe({
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
