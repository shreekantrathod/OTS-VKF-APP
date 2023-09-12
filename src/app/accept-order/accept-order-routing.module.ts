import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptOrderPage } from './accept-order.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptOrderPageRoutingModule {}
