import { Component, OnInit } from '@angular/core';
import { PublicProductsService } from '@landing/services/public-products.service';
import { PublicCategoriesService } from '@landing/services/public-categories.service';

@Component({
  selector: 'app-landing-products-page',
  templateUrl: './landing-products-page.component.html',
  styleUrls: ['./landing-products-page.component.scss']
})
export class LandingProductsPageComponent implements OnInit {
  isLoadingProducts: boolean = true;
  isLoadingCategories: boolean = true;
  productsList: Array<any> = [];
  categoriesList: Array<any> = [];

  constructor(private _publicProductsService: PublicProductsService, private _publicCategoriesService: PublicCategoriesService) { }

  ngOnInit() {
    this.fetchProductsData();
    this.fetchCategoriesData();
  }

  fetchProductsData() {
    this._publicProductsService.getProductsApi().subscribe({
      next: (result) => {
        this.productsList = result.data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        this.isLoadingProducts = false;
      }
    });
  }

  fetchCategoriesData() {
    this._publicCategoriesService.getCategoriesApi().subscribe({
      next: (result) => {
        this.categoriesList = result.data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        this.isLoadingCategories = false;
      }
    });
  }

}
