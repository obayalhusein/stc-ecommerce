import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'categories-tabs-skeleton',
  templateUrl: './categories-tabs-skeleton.component.html',
  styleUrls: ['./categories-tabs-skeleton.component.scss']
})
export class CategoriesTabsSkeletonComponent implements OnInit {
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
