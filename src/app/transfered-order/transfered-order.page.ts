import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController, MenuController, LoadingController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../services/orders.service';
interface TransferOrder {  
  otsOrderedQty:any;
  productName: String;
  otsOrderId: any;
  assigneeName:string;  
} 
@Component({
  selector: 'app-transfered-order',
  templateUrl: './transfered-order.page.html',
  styleUrls: ['./transfered-order.page.scss'],
})
export class TransferedOrderPage implements OnInit {

  distributorId:any;
  transferOrder:any;
  date:any;
  loaderRunning = false;
  transferOrders: TransferOrder[]; 
  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute,private router: Router,public atrCtrl: AlertController, private orderSerive: OrdersService ,private toastr: ToastrService,
    public menu: MenuController, 
    public loadingController: LoadingController,){
      this.distributorId=localStorage.getItem("distId");
      this.acceptOrderDetails();
    }


  ngOnInit() {
  }
  async acceptOrderDetails() {
    var jsonData2 = {
      "request": {
          "distrubitorId": this.distributorId,
          "status": "Assigned"
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
      this.transferOrder=JSON.parse(JSON.stringify(response)).responseData.orderProductList;
      this.transferOrders=this.transferOrder;
     
    }, (error) => {
      loading.dismiss();
      this.loaderRunning = false;
    this.toastr.error('Error occured recieving details, please try again later');
      console.log(error);
    })
  }
}
