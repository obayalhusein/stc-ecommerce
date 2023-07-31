import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import { AdminProductsService } from '../../services/admin-products.service';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit, AfterViewInit  {
  isLoadingData: boolean = true;
  productsList: Array<any> = [];
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'quantity', 'discount', 'tools'];
  dataSource = new MatTableDataSource(this.productsList);

  constructor(private _liveAnnouncer: LiveAnnouncer, private _adminProductsService: AdminProductsService) {}

  @ViewChild(MatSort) sort: any;

  ngOnInit() {
    this.fetchProductsData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  fetchProductsData() {
    this._adminProductsService.getProductsApi().subscribe({
      next: (result) => {
        this.isLoadingData = false;
        this.productsList = result.data;
        this.dataSource = new MatTableDataSource(this.productsList);
      },
      error: (error) => {
        this.isLoadingData = false;
        console.log(error)
      }
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
