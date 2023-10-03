import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'accepted-orders',
        loadChildren: () => import('../accepted-orders/accepted-orders.module').then(m => m.AcceptedOrdersPageModule)
      },
      {
        path: 'closed-orders',
        loadChildren: () => import('../closed-orders/closed-orders.module').then(m => m.ClosedOrdersPageModule)
      },
      {
        path: 'transfered-order',
        loadChildren: () => import('../transfered-order/transfered-order.module').then(m => m.TransferedOrderPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
