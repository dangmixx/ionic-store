import { Component, Input, OnInit } from '@angular/core';
import { IProductCardModel } from '../../models/product-card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() item: IProductCardModel;
  constructor() {}

  ngOnInit() {}
}
