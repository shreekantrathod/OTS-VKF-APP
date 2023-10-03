import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferedOrderPageRoutingModule } from './transfered-order-routing.module';

import { TransferedOrderPage } from './transfered-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferedOrderPageRoutingModule
  ],
  declarations: [TransferedOrderPage]
})
export class TransferedOrderPageModule {}
