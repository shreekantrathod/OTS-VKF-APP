// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appBaseUrl:"https://evenkart.ortusolis.in:8445/ots/api/v18_1",
 firebaseConfig : {
    apiKey: "AIzaSyBiiDIqBoyYR7FqeYhlhwrHlR0rZMdCSwM",
    authDomain: "ots-vkf.firebaseapp.com",
    projectId: "ots-vkf",
    storageBucket: "ots-vkf.appspot.com",
    messagingSenderId: "13672270670",
    appId: "1:13672270670:web:9fc896ef92044f3f6d2c1f"
  }
  
  // Initialize Firebase
 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
