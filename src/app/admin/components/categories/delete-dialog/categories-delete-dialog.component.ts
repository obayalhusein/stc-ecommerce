import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminCategoriesService } from '@admin/services/admin-categories.service';

@Component({
  selector: 'app-categories-delete-dialog',
  templateUrl: './categories-delete-dialog.component.html',
  styleUrls: ['./categories-delete-dialog.component.scss']
})
export class CategoriesDeleteDialogComponent implements OnInit {
  isSubmitting: boolean = false;

  constructor(private _dialogRef: MatDialogRef<CategoriesDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _adminCategoriesService: AdminCategoriesService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isSubmitting = true;

    this._adminCategoriesService.deleteCategoryByIdApi(this.data.category.id).subscribe({
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
