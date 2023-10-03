import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferedOrderPage } from './transfered-order.page';

const routes: Routes = [
  {
    path: '',
    component: TransferedOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferedOrderPageRoutingModule {}
