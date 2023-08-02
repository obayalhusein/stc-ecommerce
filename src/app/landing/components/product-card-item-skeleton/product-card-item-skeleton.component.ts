import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card-item-skeleton',
  templateUrl: './product-card-item-skeleton.component.html',
  styleUrls: ['./product-card-item-skeleton.component.scss']
})
export class ProductCardItemSkeletonComponent implements OnInit {
  @Input() repeat: number = 1;
  loops: Array<number> = [];

  constructor() { }

  ngOnInit() {
    this.loops = Array.from(Array(this.repeat).keys());
  }

  ngOnChanges() {
    this.loops = Array.from(Array(this.repeat).keys());
  }

}
