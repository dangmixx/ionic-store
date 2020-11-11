import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageProductGridComponent } from './page-product-grid/page-product-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-grid',
    pathMatch: 'full',
  },
  {
    path: 'product-grid',
    component: PageProductGridComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
