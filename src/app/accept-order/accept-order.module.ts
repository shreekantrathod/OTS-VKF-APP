import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptOrderPageRoutingModule } from './accept-order-routing.module';

import { AcceptOrderPage } from './accept-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptOrderPageRoutingModule
  ],
  declarations: [AcceptOrderPage]
})
export class AcceptOrderPageModule {}
