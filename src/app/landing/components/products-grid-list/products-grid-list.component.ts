import { environment } from 'src/enviremonets';
import { PublicProductsService } from './../../services/public-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-grid-list',
  templateUrl: './products-grid-list.component.html',
  styleUrls: ['./products-grid-list.component.scss']
})
export class ProductsGridListComponent implements OnInit {
  baseUrl: String = environment.baseUrl;
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
      }
    });
  }

}
