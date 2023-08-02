import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'categories-tabs',
  templateUrl: './categories-tabs.component.html',
  styleUrls: ['./categories-tabs.component.scss']
})
export class CategoriesTabsComponent implements OnInit {
  @Input() isLoading: boolean = true;
  @Input() categoriesList: Array<any> = [];

  ngOnInit() {
  }

}
