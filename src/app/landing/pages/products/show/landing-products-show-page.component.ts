import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicProductsService } from '@landing/services/public-products.service';
import { environment } from 'src/enviremonets';

@Component({
  selector: 'app-landing-products-show-page',
  templateUrl: './landing-products-show-page.component.html',
  styleUrls: ['./landing-products-show-page.component.scss']
})
export class LandingProductsShowPageComponent implements OnInit {
  baseUrl: String = environment.baseUrl;
  isLoading: boolean = true;
  product: any = {};
  selectedPreviewImage: string = "";

  constructor(private _route: ActivatedRoute, private _publicProductsService: PublicProductsService) { }
  productId: number = 0;

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.productId = params['id'];
      this.fetchProductData();
    });
  }

  fetchProductData() {
    this._publicProductsService.getProductByIdApi(this.productId).subscribe({
      next: (result) => {
        this.product = result.data;
        this.selectedPreviewImage = this.baseUrl + this.product.attributes.preview.data[0].attributes.url;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  selectPreviewImage(imageUrl: string) {
    this.selectedPreviewImage = imageUrl;
  }

}
