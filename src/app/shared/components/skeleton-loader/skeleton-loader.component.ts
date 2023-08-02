import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() type: string = "text";

  constructor() { }

  ngOnInit() {
  }

}
