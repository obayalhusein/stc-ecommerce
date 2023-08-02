import { Component, OnInit } from '@angular/core';
import { PublicProductsService } from '../../services/public-products.service';

@Component({
  selector: 'app-landing-products-page',
  templateUrl: './landing-products-page.component.html',
  styleUrls: ['./landing-products-page.component.scss']
})
export class LandingProductsPageComponent implements OnInit {
  isLoading: boolean = true;
  productsList: Array<any> = [];

  constructor(private _publicProductsService: PublicProductsService) { }

  ngOnInit() {
    this.fetchProductsData();
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
        this.isLoading = false;
      }
    });
  }

}
