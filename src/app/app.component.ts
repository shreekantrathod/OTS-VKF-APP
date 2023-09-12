import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController, NavController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router : Router,
    private platform: Platform, private navCtrl: NavController,
    private alertController: AlertController) {
      this.initializeApp();
    }

    mainMenu;
    homeMenu;
    initializeApp() {
      let userloggedIn ="loggedIn";
   if (userloggedIn === "loggedIn") {
   // this.router.navigateByUrl('tab-bar/accept-order'); 
   }else{
    this.router.navigateByUrl('login');
   }
   
   this.homeMenu = "/tab-bar/accept-order"
   //this.navCtrl.navigateRoot(['./tab-bar/accept-order']);
      this.platform.backButton.subscribeWithPriority(10,async () => {
        debugger
        let current_screen = this.router.url
        if (current_screen.toLowerCase() == this.homeMenu || current_screen.toLowerCase().includes("login")) {
          const alert = await this.alertController.create({
            header: 'Do You Want to close the app?',
            buttons: [
              {
                text: 'Stay',
                role: 'cancel'
              }, {
                text: 'Exit',
                handler: () => {
                  navigator['app'].exitApp();
                }
              }
            ]
          });
          await alert.present();
        }
      });
    }
}
