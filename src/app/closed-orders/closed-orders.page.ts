import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController, MenuController, LoadingController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../services/orders.service';
interface ClosedOrder {  
  otsOrderedQty:any;
  productName: String;
  otsOrderId: any;  
} 

@Component({
  selector: 'app-closed-orders',
  templateUrl: './closed-orders.page.html',
  styleUrls: ['./closed-orders.page.scss'],
})
export class ClosedOrdersPage implements OnInit {
  distributorId:any;
  closedOrder:any;
  date:any;
  loaderRunning = false;
  closedOrders: ClosedOrder[]; 
  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute,private router: Router,public atrCtrl: AlertController, private orderSerive: OrdersService ,private toastr: ToastrService,
    public menu: MenuController, 
    public loadingController: LoadingController,){
      this.distributorId=localStorage.getItem("distId");
      this.closedOrderDetails();
    }


  ngOnInit() {
  }
  async closedOrderDetails() {
    var jsonData2 = {
      "request": {
          "distrubitorId": this.distributorId,
          "status": "close"
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
      this.closedOrder=JSON.parse(JSON.stringify(response)).responseData.orderProductList;
      this.closedOrders=this.closedOrder;
     
    }, (error) => {
      loading.dismiss();
      this.loaderRunning = false;
    this.toastr.error('Error occured recieving details, please try again later');
      console.log(error);
    })
  }
}