import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptedOrdersPageRoutingModule } from './accepted-orders-routing.module';

import { AcceptedOrdersPage } from './accepted-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptedOrdersPageRoutingModule
  ],
  declarations: [AcceptedOrdersPage]
})
export class AcceptedOrdersPageModule {}
