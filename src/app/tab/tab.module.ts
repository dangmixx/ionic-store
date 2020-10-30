import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabHomeComponent } from './tab-home/tab-home.component';
import { IonicModule } from '@ionic/angular';
import { TabRoutingModule } from './tab-routing.module';

@NgModule({
  declarations: [TabComponent, TabHomeComponent],
  imports: [CommonModule, TabRoutingModule, IonicModule],
})
export class TabModule {}
