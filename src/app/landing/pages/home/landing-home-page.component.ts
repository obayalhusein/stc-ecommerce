import { Component, OnInit } from '@angular/core';
import { PublicProductsService } from '@landing/services/public-products.service';

@Component({
  selector: 'app-landing-home-page',
  templateUrl: './landing-home-page.component.html',
  styleUrls: ['./landing-home-page.component.scss']
})
export class LandingHomePageComponent implements OnInit {
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
