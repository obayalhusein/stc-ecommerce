import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'products-grid-list',
  templateUrl: './products-grid-list.component.html',
  styleUrls: ['./products-grid-list.component.scss']
})
export class ProductsGridListComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() productsList: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

}
