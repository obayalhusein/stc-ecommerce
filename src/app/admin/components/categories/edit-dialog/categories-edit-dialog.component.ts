import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminCategoriesService } from '@admin/services/admin-categories.service';

@Component({
  selector: 'app-categories-edit-dialog',
  templateUrl: './categories-edit-dialog.component.html',
  styleUrls: ['./categories-edit-dialog.component.scss']
})
export class CategoriesEditDialogComponent implements OnInit {
  isSubmitting: boolean = false;
  formData = {
    title: '',
    description: '',
  };

  constructor(private _dialogRef: MatDialogRef<CategoriesEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _adminCategoriesService: AdminCategoriesService) { }

  ngOnInit() {
    this.setCategoryInitData();
  }

  setCategoryInitData() {
    this.formData.title = this.data.category.attributes.title;
    this.formData.description = this.data.category.attributes.description;
  }

  onSubmit(): void {
    this.isSubmitting = true;

    const data = {
      data: this.formData
    };

    this._adminCategoriesService.updateCategoryApi(data, this.data.category.id).subscribe({
      next: (result) => {
        this._dialogRef.close({ isSubmitted: true });
      },
      error: (error) => {
        this.isSubmitting = false;
        console.log(error)
      },
    });
  }
}
