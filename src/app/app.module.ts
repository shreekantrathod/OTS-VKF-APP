import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// import { ToastrModule } from 'ngx-toastr';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { ToastrModule } from 'ngx-toastr';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),BrowserAnimationsModule, AppRoutingModule,FormsModule, AppFirebaseModule, ReactiveFormsModule, ToastrModule.forRoot(),HttpClientModule, NgOtpInputModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,
    deps: [HttpClient]}],
  bootstrap: [AppComponent],
})
export class AppModule {}
