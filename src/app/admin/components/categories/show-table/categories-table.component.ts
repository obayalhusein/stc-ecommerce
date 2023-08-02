import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, Output, EventEmitter, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesDeleteDialogComponent } from '@admin/components/categories/delete-dialog/categories-delete-dialog.component';
import { CategoriesEditDialogComponent } from '@admin/components/categories/edit-dialog/categories-edit-dialog.component';

@Component({
  selector: 'categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements OnInit, AfterViewInit {
  @Input() isLoadingData: boolean = true;
  @Input() categoriesList: Array<any> = [];
  @Output() dataChanged = new EventEmitter()

  displayedColumns: string[] = ['id', 'title', 'description', 'tools'];
  dataSource: any = new MatTableDataSource([]);

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  @ViewChild(MatSort) sort: any;

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.categoriesList);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  showEditCategoryDialog(category: any) {
    const data = {
      category
    };

    const dialogRef = this.dialog.open(CategoriesEditDialogComponent, { data });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data?.isSubmitted) {
        this.dataChanged.emit();
      }
    });
  }

  showDeleteCategoryDialog(category: any) {
    const data = {
      category
    };

    const dialogRef = this.dialog.open(CategoriesDeleteDialogComponent, { data });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data?.isSubmitted) {
        this.dataChanged.emit();
      }
    });
  }

}
