import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminCategoriesService } from '@admin/services/admin-categories.service';
import { CategoriesNewDialogComponent } from '@admin/components/categories/create-dialog/categories-new-dialog.component';

@Component({
  selector: 'app-admin-categories-page',
  templateUrl: './admin-categories-page.component.html',
  styleUrls: ['./admin-categories-page.component.scss']
})
export class AdminCategoriesPageComponent implements OnInit {
  isLoadingData: boolean = true;
  categoriesList: Array<any> = [];

  constructor(public dialog: MatDialog, private _adminCategoriesService: AdminCategoriesService) { }

  ngOnInit() {
    this.fetchCategoriesData();
  }

  fetchCategoriesData() {
    this._adminCategoriesService.getCategoriesApi().subscribe({
      next: (result) => {
        this.categoriesList = result.data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        this.isLoadingData = false;
      }
    });
  }

  showNewCategoryDialog() {
    const dialogRef = this.dialog.open(CategoriesNewDialogComponent, {});

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data?.isSubmitted) {
        this.fetchCategoriesData();
      }
    });
  }

}
