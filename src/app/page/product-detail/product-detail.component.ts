import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProductCardModel } from 'src/app/core/models/product-card';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productDetail: IProductCardModel;
  constructor(private route: ActivatedRoute, private location: Location) {
    this.route.queryParams.subscribe((item: { id: string }) => {
      this.getDetailItemById(item.id);
    });
  }

  ngOnInit() {}

  getDetailItemById(id: string) {
    this.productDetail = {
      id: '000',
      imageUrl: 'assets/images/macbook-gold.png',
      name: 'Macbook 15" i7 16G 512G SSD',
      title: 'Item 1 ',
      subTitle: 'SubTitle Item 1',
      description: 'Item 1 for demo',
      price: '10000',
      oldPrice: '110000000',
      starts: 5,
    };
  }
  goBack() {
    this.location.back();
  }
}
