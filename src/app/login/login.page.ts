import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import * as firebase from 'firebase';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { WindowService } from './window.service';
import { LoaderService } from 'src/services/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSubmitted = false;
  loaderRunning = false;
  windowRef: any;
  phoneNumber: any;
  password:any;
 distId:any;
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public userService: UserService,
    private toastr: ToastrService,private win: WindowService,
    public loadingController: LoadingController,
    private navCtrl: NavController, private ionLoader: LoaderService,

  ) { 
    this.distId="";
  }

 
  verificationCode: string;
  signInForm: FormGroup;

  ngOnInit() {
   
    this.signInForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

    }
  


 async signIn() {
    this.isSubmitted = true;
    if ((this.signInForm.value.phoneNumber == "") || (this.signInForm.value.phoneNumber == null)) {
      console.log("Please provide Phone Number");
      return false;
    }
    if ((this.signInForm.value.password == "") || (this.signInForm.value.password == null)) {
      console.log("Please provide Password");
      return false;
    }  else if (!this.signInForm.valid) {
      console.log("Please provide all the required values!");
      return false;
    } else {
      var request = {
        "requestData": {
        "phoneNumber": this.signInForm.value.phoneNumber,
        "password": this.signInForm.value.password
      }
    }
   // alert(JSON.stringify(request))
   
      const loading = await this.loadingController.create({
        message: 'Please wait...'
        });
        await loading.present();
        this.loaderRunning = true;
        this.userService.userLogin(request).subscribe(response => {
        loading.dismiss();
        debugger
       // alert(JSON.stringify(response))
        this.loaderRunning = false;
      //  this.acceptOrder=JSON.parse(JSON.stringify(response)).responseData;
       this.distId=JSON.parse(JSON.stringify(response)).responseData['userDetails'];
        
      // alert(JSON.parse(JSON.stringify(this.distId)));
          if (JSON.parse(JSON.stringify(response)).responseCode == 200) {
            console.log("Logged in Successfully");
            this.navCtrl.navigateRoot(['./tabs/home']);
            
          } else {
            console.log('Please check your credentials');
          }
        }, error => {
          console.log(error);
          this.loaderRunning = false;
          console.log('Error occurred during login');
        });
    }
  }


  get errorControl() {
    return this.signInForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    debugger
      if ((this.signInForm.value.phoneNumber == "") || (this.signInForm.value.phoneNumber == null)) {
        this.toastr.error("Please provide Phone Number ");
        return false;
      }else if (!this.signInForm.valid) {
        this.toastr.error("Please provide all the required values!");
        console.log('Please provide all the required values!')
        return false;
      } else {
        console.log(this.signInForm.value);
     
      }
  }
  
 

}



