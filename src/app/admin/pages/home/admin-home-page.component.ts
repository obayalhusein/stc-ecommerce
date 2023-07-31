import { Component, OnInit } from '@angular/core';
import { AdminProductsService } from '../../services/admin-products.service';
import { AdminCategoriesService } from '../../services/admin-categories.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent implements OnInit {
  productsCount: number = 0;
  categoriesCount: number = 0;
  ordersCount: number = 0;

  constructor(private _adminProductsService: AdminProductsService, private _adminCategoriesService: AdminCategoriesService) { }

  ngOnInit() {
    this.fetchCategoriesData();
    this.fetchProductsData();
  }

  fetchCategoriesData() {
    this._adminCategoriesService.getCategoriesApi().subscribe({
      next: (result) => {
        this.categoriesCount = result.meta.pagination.total;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  fetchProductsData() {
    this._adminProductsService.getProductsApi().subscribe({
      next: (result) => {
        this.productsCount = result.meta.pagination.total;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

}
