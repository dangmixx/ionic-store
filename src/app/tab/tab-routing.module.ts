import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabHomeComponent } from './tab-home/tab-home.component';
import { TabComponent } from './tab.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab-1',
    pathMatch: 'full',
  },
  {
    path: 'tab-1',
    component: TabHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRoutingModule {}
