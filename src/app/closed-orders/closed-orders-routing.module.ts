import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosedOrdersPage } from './closed-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ClosedOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosedOrdersPageRoutingModule {}
