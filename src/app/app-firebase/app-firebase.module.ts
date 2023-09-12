import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import * as firebase from 'firebase';

import { environment } from '../../environments/environment';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [AngularFireModule, AngularFireAuthModule],
})
export class AppFirebaseModule {

}
