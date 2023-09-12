import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosedOrdersPageRoutingModule } from './closed-orders-routing.module';

import { ClosedOrdersPage } from './closed-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosedOrdersPageRoutingModule
  ],
  declarations: [ClosedOrdersPage]
})
export class ClosedOrdersPageModule {}
