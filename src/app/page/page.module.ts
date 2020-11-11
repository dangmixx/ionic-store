import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProductGridComponent } from './page-product-grid/page-product-grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { PageRoutingModule } from './page-routing.module';
import { ProductCardComponent } from '../core/components/product-card/product-card.component';
import { ToolbarHeaderComponent } from '../core/components/toolbar-header/toolbar-header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarVotedComponent } from '../core/components/star-voted/star-voted.component';

@NgModule({
  declarations: [PageProductGridComponent, ProductCardComponent, ToolbarHeaderComponent, ProductDetailComponent, StarVotedComponent],
  imports: [CommonModule, IonicModule, PageRoutingModule],
})
export class PageModule {}
