import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCyo-nkrvxWX-7NT3rW3z_hoDsH9OiFWtg",
  authDomain: "feedlyapp-c9554.firebaseapp.com",
  databaseURL: "https://feedlyapp-c9554.firebaseio.com",
  projectId: "feedlyapp-c9554",
  storageBucket: "feedlyapp-c9554.appspot.com",
  messagingSenderId: "697162797324"
};

firebase.initializeApp(config)


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
