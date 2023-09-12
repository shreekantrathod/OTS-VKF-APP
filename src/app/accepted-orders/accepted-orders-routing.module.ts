import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptedOrdersPage } from './accepted-orders.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptedOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptedOrdersPageRoutingModule {}
