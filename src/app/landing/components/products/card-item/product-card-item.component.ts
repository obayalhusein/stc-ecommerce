import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/enviremonets';

@Component({
  selector: 'product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent implements OnInit {
  @Input() item: any = {};
  baseUrl: String = environment.baseUrl;

  constructor() { }

  ngOnInit() {
  }

}
