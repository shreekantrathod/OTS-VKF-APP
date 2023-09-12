import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController, MenuController, LoadingController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { async } from 'rxjs';
import { OrdersService } from '../services/orders.service';

interface NewOrder {  
  otsOrderedQty:any;
  productName: String;
  otsOrderId: any;  
}  
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  distributorId:any;
  newOrder:any;
  date:any;
  loaderRunning = false;
 
  newOrders: NewOrder[]; 
  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute,private router: Router,public atrCtrl: AlertController, private orderSerive: OrdersService ,private toastr: ToastrService,
    public menu: MenuController,  public alertController: AlertController,
    public loadingController: LoadingController,){
      this.newOrderDetails();
    }

    async newOrderDetails() {
      var jsonData2 = {
        "request": {
            "distrubitorId": "73",
            "status": "New"
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
        this.newOrder=JSON.parse(JSON.stringify(response)).responseData.orderProductList;
        this.newOrders=this.newOrder;
       
      }, (error) => {
        loading.dismiss();
        this.loaderRunning = false;
      this.toastr.error('Error occured recieving details, please try again later');
        console.log(error);
      })
    }

    async assignee(){

      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "Radio",
        inputs: [
          {
            name: "radio1",
            type: "radio",
            label: "Self Assignee",
            value: "Self Assignee",
            checked: true
          },
          {
            name: "radio1",
            type: "radio",
            label: "OTS",
            value: "OTS",
            checked: false
          },
          
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Cancel");
            }
          },
          {
            text: "Ok",
            handler: () => {
              console.log("Confirm Ok");
            }
          }
        ]
      });
  
      await alert.present();
    
    }

    async cancleOrder()
    {
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
        this.newOrder=JSON.parse(JSON.stringify(response)).responseData.orderProductList;
        this.newOrders=this.newOrder;
       
      }, (error) => {
        loading.dismiss();
        this.loaderRunning = false;
      this.toastr.error('Error occured recieving details, please try again later');
        console.log(error);
      })
     
    }
}
