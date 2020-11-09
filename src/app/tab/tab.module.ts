import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabHomeComponent } from './tab-home/tab-home.component';
import { IonicModule } from '@ionic/angular';
import { TabRoutingModule } from './tab-routing.module';
import { ProductCardComponent } from '../core/components/product-card/product-card.component';
import { ProductService } from '../core/services/product.service';

@NgModule({
  declarations: [TabComponent, TabHomeComponent, ProductCardComponent],
  imports: [CommonModule, TabRoutingModule, IonicModule],
  providers: [ProductService],
})
export class TabModule {}
