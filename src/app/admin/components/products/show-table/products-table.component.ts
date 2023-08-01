import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminProductsService } from '../../../services/admin-products.service';
import { ProductsDeleteDialogComponent } from '../delete-dialog/products-delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductsEditDialogComponent } from '../edit-dialog/products-edit-dialog.component';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit, AfterViewInit {
  @Input() isLoadingData: boolean = true;
  @Input() productsList: Array<any> = [];
  @Output() dataChanged = new EventEmitter()

  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'quantity', 'discount', 'tools'];
  dataSource: any = new MatTableDataSource([]);

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  @ViewChild(MatSort) sort: any;

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.productsList);
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

  showEditProductDialog(product: any) {
    const data = {
      product
    };

    const dialogRef = this.dialog.open(ProductsEditDialogComponent, { data });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data?.isSubmitted) {
        this.dataChanged.emit();
      }
    });
  }

  showDeleteProductDialog(product: any) {
    const data = {
      product
    };

    const dialogRef = this.dialog.open(ProductsDeleteDialogComponent, { data });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data?.isSubmitted) {
        this.dataChanged.emit();
      }
    });
  }

}
