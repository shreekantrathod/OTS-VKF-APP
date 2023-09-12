import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { LoaderService } from 'src/services/loader.service';
import { WindowService } from '../login/window.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.page.html',
  styleUrls: ['./otp-verify.page.scss'],
})
export class OtpVerifyPage implements OnInit {

  otp:string="";

  windowRef: any;
  verificationCode: string;
  verifiedPhonNum = [];
  phoneNumber: string;
  phoneNo:string;
  isVerifyenabled = false;
  
  constructor(private win: WindowService,private navCtrl: NavController, private ionLoader: LoaderService, public loadingController: LoadingController,) { }
  
   
     
      ngOnInit() {
        this.phoneNumber =  localStorage.getItem("PhonNum");
        this.windowRef = this.win.windowRef;
        let this2 = this
        this.windowRef.recaptchaVerifier =  new firebase.auth.RecaptchaVerifier('recaptcha-container',{
          'size': 'invisible',
          
          
            'callback': function (response) {
              this2.ionLoader.hideLoader()
              this2.onSignInSubmit(response);
            }
          }
        );
          }
    onOtpChange(otp) {
      this.otp = otp;
    }
    initAuthWithPhoneNumber_() {
      //this.navCtrl.navigateRoot(['./about-us']);
      this.doLogin(this.phoneNumber)
    }
    initAuthWithPhoneNumber() {
      this.verificationCode = "" // added for clearing previously added OTP
      localStorage.setItem("PhonNum", this.phoneNumber); 
     // this.navCtrl.navigateRoot(['./otp-verify']);
   
    this.doLogin(this.phoneNumber); // uncomment later
      this.windowRef.recaptchaVerifier.verify();
    }
    onSignInSubmit(response) {
      this.ionLoader.hideLoader()
     
      const num = this.phoneNumber;   // country code plus user's input phone number
  
        this.doLogin(this.phoneNumber);
      
    }
      async doLogin(phoneNumber) {
        debugger
       // const num = "+91" + phoneNo;
        const num2 = "+91" + phoneNumber;
        const num =  phoneNumber;
       // const appVerifier = this.windowRef.recaptchaVerifier;
    
    //  localStorage.setItem("PhonNum", num2);  
        const loading = await this.loadingController.create({
          message: 'Please wait...'
        });
        await loading.present();
        //alert(num2)
        const appVerifier = this.windowRef.recaptchaVerifier;
        firebase
          .auth()
          .signInWithPhoneNumber(num2,appVerifier)
          .then((result) => {
            this.ionLoader.hideLoader()
            this.windowRef.confirmationResult = result;
            this.verificationCode = " ";
           // alert("otp")
            this.ionLoader.hideLoader();
            alert("otp sent successfully");
           // this.navCtrl.navigateRoot(['./otp-verify']);
           // this.start()
           // this.maxTime = 60
           // this.StartTimer()
          })
          .catch((error) => {
            this.ionLoader.hideLoader();
          
            console.log(error);
          });
          this.ionLoader.hideLoader()
    //  }else{
      //  localStorage.setItem("staffLoginPhoneNumber", phoneNo)          
       // this.onPageDidLeave()
       
     // }
    
    }
  /* }, (error) => {
    loading.dismiss()
    debugger
    console.log(error);
    alert("Error occured In Sign In, please try again later")
  
  })
  }
  }*/
  
      verifyLoginCode() {
        debugger
       // this.ionLoader.showLoader()
  
        const vCode = this.otp + "";
        if(vCode.length != 6){
          alert(' please enter 6 digit otp');
          this.ionLoader.hideLoader();
          return;
        }else{
          this.ionLoader.showLoader();
        this.windowRef.confirmationResult.confirm(vCode).then((result) => {
          this.ionLoader.hideLoader()
          this.verifiedPhonNum.push(this.phoneNumber);
          this.navCtrl.navigateRoot(['./tabs']);
         
        })
          .catch((error) => {
            this.ionLoader.hideLoader()
            alert('Incorrect code entered');
           // this.logger.log("OTP entered :- " + vCode + "\n Incorrect code entered\n" + JSON.stringify(error));
            console.log(error, 'Incorrect code entered?')
          });
          this.ionLoader.hideLoader()
        }
        this.ionLoader.hideLoader()
    
    }
    
    async ionViewWillEnter(){
      // this.windowRef=await this.windowService.windowRef;
       this.windowRef.recaptchaVerifier=await new firebase.auth.RecaptchaVerifier('recaptcha-container');
       await this.windowRef.recaptchaVerifier.render()
     }
  }
  

