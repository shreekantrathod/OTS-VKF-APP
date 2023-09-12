import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController, MenuController, LoadingController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../services/orders.service';
interface CancleOrder {  
  otsOrderedQty:any;
  productName: String;
  otsOrderId: any;  
} 

@Component({
  selector: 'app-cancelled-orders',
  templateUrl: './cancelled-orders.page.html',
  styleUrls: ['./cancelled-orders.page.scss'],
})
export class CancelledOrdersPage implements OnInit {
  distributorId:any;
  cancleOrder:any;
  date:any;
  loaderRunning = false;
  cancleOrders: CancleOrder[]; 
  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute,private router: Router,public atrCtrl: AlertController, private orderSerive: OrdersService ,private toastr: ToastrService,
    public menu: MenuController, 
    public loadingController: LoadingController,){
      this.cancleOrderDetails();
    }

  ngOnInit() {
  }
  async cancleOrderDetails() {
    var jsonData2 = {
      "request": {
        "orderId": "1693",
        "customerId": "56",
        "orderStatus": "Cancel",
        "productId": "2084"
        }
      }
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.loaderRunning = true;
//alert(JSON.stringify(jsonData))
this.orderSerive.getNewOrder(jsonData2).subscribe(response => {
  loading.dismiss();
      this.loaderRunning = false;
      this.cancleOrder=JSON.parse(JSON.stringify(response)).responseData.orderProductList;
      this.cancleOrders=this.cancleOrder;
     
    }, (error) => {
      loading.dismiss();
      this.loaderRunning = false;
    this.toastr.error('Error occured recieving details, please try again later');
      console.log(error);
    })
  }

}
