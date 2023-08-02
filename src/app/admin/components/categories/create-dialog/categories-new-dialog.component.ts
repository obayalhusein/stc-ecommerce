import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminCategoriesService } from '@admin/services/admin-categories.service';

@Component({
  selector: 'app-categories-new-dialog',
  templateUrl: './categories-new-dialog.component.html',
  styleUrls: ['./categories-new-dialog.component.scss']
})
export class CategoriesNewDialogComponent implements OnInit {
  isSubmitting: boolean = false;
  formData = {
    title: '',
    description: '',
  };

  constructor(private _dialogRef: MatDialogRef<CategoriesNewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _adminCategoriesService: AdminCategoriesService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isSubmitting = true;

    const data = {
      data: this.formData
    };

    this._adminCategoriesService.storeCategoryApi(data).subscribe({
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
