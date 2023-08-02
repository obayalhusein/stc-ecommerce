import { Component, OnInit, Input } from '@angular/core';
import { PublicProductsService } from './../../services/public-products.service';

@Component({
  selector: 'products-grid-list',
  templateUrl: './products-grid-list.component.html',
  styleUrls: ['./products-grid-list.component.scss']
})
export class ProductsGridListComponent implements OnInit {
  @Input() productsList: Array<any> = [];

  constructor(private _publicProductsService: PublicProductsService) { }

  ngOnInit() {
  }

}
