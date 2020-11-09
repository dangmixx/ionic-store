import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductCardModel } from 'src/app/core/models/product-card';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.component.html',
  styleUrls: ['./tab-home.component.scss'],
  providers: [ProductService],
})
export class TabHomeComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}
  listData: IProductCardModel[] = [];
  ngOnInit() {
    this.searchItem();
  }

  navigateTab(url: string) {
    this.router.navigate(['/tab/' + url]);
  }

  searchItem() {
    return this.productService.searchProduct().subscribe((listData) => {
      this.listData = listData;
    });
  }
}
