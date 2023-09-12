import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpVerifyPageRoutingModule } from './otp-verify-routing.module';

import { OtpVerifyPage } from './otp-verify.page';
import { NgOtpInputModule } from 'ng-otp-input';
import { AppFirebaseModule } from 'src/app/app-firebase/app-firebase.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpVerifyPageRoutingModule,
    NgOtpInputModule,
    AppFirebaseModule
  ],
  declarations: [OtpVerifyPage]
})
export class OtpVerifyPageModule {}
