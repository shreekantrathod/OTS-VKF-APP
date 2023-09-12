import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.page.html',
  styleUrls: ['./new-orders.page.scss'],
})
export class NewOrdersPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  navigateToNewOrdersPage() {
    this.router.navigate(['/transfer-orders']);
}
}
