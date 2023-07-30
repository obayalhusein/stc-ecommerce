import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vector-logo',
  templateUrl: './vector-logo.component.html',
  styleUrls: ['./vector-logo.component.scss']
})
export class VectorLogoComponent implements OnInit {
  @Input() width: number = 80;
  height: number = this.width / 2;

  constructor() { }

  ngOnInit() {
    this.height = this.width / 2;
  }
}
