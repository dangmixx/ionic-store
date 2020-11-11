import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductCardModel } from 'src/app/core/models/product-card';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-page-product-grid',
  templateUrl: './page-product-grid.component.html',
  styleUrls: ['./page-product-grid.component.scss'],
  providers: [ProductService],
})
export class PageProductGridComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  listData: IProductCardModel[] = [];
  ngOnInit() {
    this.searchItem();
  }

  searchItem() {
    return this.productService.searchProduct().subscribe((listData) => {
      this.listData = listData;
    });
  }

  goDetailProduct(item: IProductCardModel) {
    this.router.navigateByUrl('page/product/11', {
      queryParams: {
        id: 11,
        lvl: 'vlvl',
      },
    });
  }
}
